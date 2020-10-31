import {
  Canvas,
  CanvasKit,
  Font,
  FontMgr,
  Paint,
  SkottieAnimation,
  Surface,
  Typeface,
  PathCommand,
  RuntimeEffect,
  InputRect,
} from "canvaskit-wasm";
import { startProcess } from "./start-process";
import fs from "fs";
import path from "path";
import { ExecaChildProcess, ExecaError } from "execa";
import Timer from "../util/timer";
import { parse } from "../util/svg-parser";
import { parseTransform } from "../util/parse-transform";
import Colors from "../util/colors";
import parseSVG from "svg-path-parser";
import { RenderParams } from "../types/render-params";
import { loadFonts } from "../util/load";
import { SvgRenderer } from "./svg-renderer";
import { between, EasingFunctions, cubicBezier } from "../util/math";

export class Renderer {
  CanvasKit: CanvasKit;
  surface: Surface;
  skcanvas: Canvas;
  paint: Paint;
  context: number;
  offset: number;
  args: RenderParams;
  fontMgr: FontMgr;

  timer: Timer;
  fonts: {
    roboto: Font;
    caveat: Font;
  };
  textPaint: Paint;
  frame = 0;
  lotties: SkottieAnimation[];
  assets: { [key: string]: SkottieAnimation | SvgRenderer };

  constructor(CanvasKit: CanvasKit, args: RenderParams) {
    this.CanvasKit = CanvasKit;
    this.args = args;
    this.timer = new Timer("ms");
    this.context = this.CanvasKit.currentContext();
    this.surface = this.CanvasKit.MakeSurface(this.args.width, this.args.height);
    if (!this.surface) {
      console.log("Could not make surface");
      return;
    }
    this.skcanvas = this.surface.getCanvas();
    this.paint = new this.CanvasKit.Paint();
    this.paint.setAntiAlias(true);
    this.assets = {} as { [key: string]: SkottieAnimation | SvgRenderer };
  }

  makeFont = (buf: ArrayBuffer, size: number) => {
    //@ts-ignore
    return new this.CanvasKit.Font(this.fontMgr.MakeTypefaceFromData(buf), size);
  };

  loadFonts = async () => {
    this.fontMgr = this.CanvasKit.FontMgr.RefDefault();
    const [robotoBuffer, caveatBuffer] = await loadFonts(["Roboto/Roboto-Regular.ttf", "Caveat/Caveat-Regular.ttf"]);

    this.fonts = {
      roboto: this.makeFont(robotoBuffer, 48),
      caveat: this.makeFont(caveatBuffer, 48),
    };

    this.textPaint = new this.CanvasKit.Paint();
    this.textPaint.setAntiAlias(true);
    this.textPaint.setColor(this.CanvasKit.Color(22, 24, 25, 1.0));
    this.textPaint.setStyle(this.CanvasKit.PaintStyle.Fill);
  };

  load = async () => {
    await this.loadFonts();

    for (const key in this.args.assets) {
      if (fs.statSync(this.args.assets[key])) {
        if (this.args.assets[key].endsWith("svg")) {
          this.assets[key] = new SvgRenderer(this.CanvasKit, { filepath: this.args.assets[key] });
        } else if (this.args.assets[key].endsWith(".json")) {
          const filepath = path.join(process.cwd(), this.args.assets[key]);
          this.assets[key] = this.CanvasKit.MakeAnimation(fs.readFileSync(filepath, "utf-8"));
        }
      }
    }
  };

  draw = (t: number = 0) => {
    if (t > this.args.duration) {
      return null;
    }

    this.skcanvas.clear(this.CanvasKit.WHITE);

    // this.skcanvas.clear(this.CanvasKit.Color(255, 255, 255, 1.0));

    // this.paint.setStyle(this.CanvasKit.PaintStyle.Fill);
    // this.paint.setColor(this.CanvasKit.Color(40, 0, 0));

    // this.skcanvas.drawText(t.toFixed(2), 50 * t, 280, this.paint, this.roboto);

    // for (let i = 0; i < this.assets.length; i++) {
    // this.renderSvgChildren(this.assets[i]);
    // }

    let i = 0;
    const groups = this.args.groups;
    while (i < groups.length && t >= groups[i].timestamps[0][0]) {
      const tstart = groups[i].timestamps[0][0];
      groups[i].images.forEach((img) => {
        this.skcanvas.save();
        if (this.assets[img.id] instanceof SvgRenderer) {
          const scale = cubicBezier(0.01, 0.75, 0.53, 1.005)(Math.min((t - tstart) / 0.5, 1));
          this.skcanvas.scale(scale, scale);
          const svg = this.assets[img.id] as SvgRenderer;
          svg.render(this.CanvasKit, this.paint, this.skcanvas);
        } else {
          const animation = this.assets[img.id] as SkottieAnimation;
          const prog = (t * animation.fps()) / (this.args.framerate * animation.duration());
          animation.seek(prog % 1.0);
          animation.render(this.skcanvas, [0, 0, this.args.width, this.args.height]);
        }
        this.skcanvas.restore();
      });
      let j = 0;
      let str = "";
      while (j < groups[i].timestamps.length && t > groups[i].timestamps[j][0]) {
        str += groups[i].words[j] + " ";
        j++;
      }

      this.skcanvas.drawText(
        str,
        20 + cubicBezier(0.01, 0.75, 0.53, 1.005)(Math.min((t - tstart) / 0.5, 1)) * 100,
        this.args.height - 60,
        this.textPaint,
        this.fonts.caveat
      );

      i++;
    }

    this.surface.flush();

    return Buffer.from(this.CanvasKit.getDataBytes(this.surface.makeImageSnapshot().encodeToData()));
  };

  log = (...args: any) => {
    if (this.args.verbose) {
      console.log(...args);
    }
  };

  run = async () => {
    let outProcess: ExecaChildProcess<string>;
    let outProcessError: ExecaError<string>;

    try {
      outProcess = startProcess(this.args);
      outProcess.on("exit", (code) => {
        this.log("Output ffmpeg exited", code);
      });
      outProcess.catch((err) => {
        console.log(err);
        outProcessError = err;
      });

      let frame = 0;
      while (true) {
        this.timer.start("draw");
        const bufferData = this.draw(frame / this.args.framerate);
        this.timer.stop("draw");
        this.timer.print("draw");
        if (bufferData && !outProcessError) {
          await new Promise((r) => outProcess.stdin.write(bufferData, r));
          frame++;
        } else {
          break;
        }
      }

      outProcess.stdin.end();
    } catch (err) {
      outProcess.kill();
      throw err;
    } finally {
      this.log("done");
    }
    return;
  };
}
