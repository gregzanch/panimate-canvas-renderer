"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const start_process_1 = require("./start-process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const robotoData = fs_1.default.readFileSync(path_1.default.join(process.cwd(), "res/fonts/Roboto/Roboto-Regular.ttf"));
class Renderer {
    constructor(CanvasKit, args) {
        this.draw = (t = 0) => {
            if (t > this.args.duration) {
                return null;
            }
            const path = starPath(this.CanvasKit, 100, 100);
            this.CanvasKit.setCurrentContext(this.context);
            const dpe = this.CanvasKit.PathEffect.MakeDash([15, 5, 5, 10], this.offset / 5);
            this.offset++;
            this.paint.setPathEffect(dpe);
            this.paint.setStyle(this.CanvasKit.PaintStyle.Stroke);
            this.paint.setStrokeWidth(Math.random());
            this.paint.setAntiAlias(true);
            this.paint.setColor(this.CanvasKit.parseColorString('#4746cd'));
            this.skcanvas.clear(this.CanvasKit.Color(255, 255, 255, 1.0));
            this.skcanvas.drawPath(path, this.paint);
            // const textPaint = new this.CanvasKit.Paint();
            this.paint.setStyle(this.CanvasKit.PaintStyle.Fill);
            this.paint.setColor(this.CanvasKit.Color(40, 0, 0));
            // this.paint.setStrokeWidth(1);
            // textPaint.setAntiAlias(true);
            this.skcanvas.drawText(t.toFixed(2), 10, 280, this.paint, this.roboto);
            // this.skcanvas.flush();
            this.surface.flush();
            dpe.delete();
            path.delete();
            const img = this.surface.makeImageSnapshot();
            if (!img) {
                console.error("no snapshot");
                return;
            }
            // img.readPixels(this.CanvasKit.image, 0, 0)
            const png = img.encodeToData();
            if (!png) {
                console.error("encoding failure");
                return;
            }
            const pngBytes = this.CanvasKit.getDataBytes(png);
            const buffer = Buffer.from(pngBytes);
            // fs.writeFileSync(`out/${t}.png`, buffer.toString("base64"), {
            // encoding: "base64",
            // });
            return buffer;
            // const img = surface.makeImageSnapshot();
            // if (!img) {
            //   console.error("no snapshot");
            //   return;
            // }
            // img.readPixels(this.CanvasKit.image, 0, 0)
            // const png = img.encodeToData();
            // if (!png) {
            //   console.error("encoding failure");
            //   return;
            // }
            // const pngBytes = this.CanvasKit.getDataBytes(png);
            // let buffer = Buffer.from(pngBytes).toString("base64");
            // fs.writeFileSync("out/out.png", buffer, {
            //   encoding: "base64",
            // });
            // // These delete calls free up memeory in the C++ WASM memory block.
            // dpe.delete();
            // skpath.delete();
            // textPaint.delete();
            // paint.delete();
            // roboto.delete();
            // textFont.delete();
            // surface.dispose();
        };
        this.run = async () => {
            let outProcess;
            let outProcessExitCode;
            try {
                outProcess = start_process_1.startProcess(this.args);
                let outProcessError;
                outProcess.on('exit', (code) => {
                    if (this.args.verbose) {
                        console.log('Output ffmpeg exited', code);
                    }
                    outProcessExitCode = code;
                });
                // If we write and get an EPIPE (like when ffmpeg fails or is finished), we could get an unhandled rejection if we don't catch the promise
                // (and meow causes the CLI to exit on unhandled rejections making it hard to see)
                outProcess.catch((err) => {
                    console.log(err);
                    outProcessError = err;
                });
                let t = 0;
                let frame = 0;
                while (true) {
                    const nullOutput = false;
                    t = frame / this.args.framerate;
                    const outFrameData = this.draw(t);
                    if (outFrameData) {
                        await new Promise((r) => outProcess.stdin.write(outFrameData, r));
                    }
                    else {
                        break;
                    }
                    if (outProcessError)
                        break;
                    frame++;
                    // totalFramesWritten += 1;
                    // fromClipFrameAt += 1;
                    // if (isInTransition) toClipFrameAt += 1;
                } // End while loop
                outProcess.stdin.end();
            }
            catch (err) {
                outProcess.kill();
                throw err;
            }
            finally {
                // if (verbose) console.log('Cleanup');
                // if (frameSource1) await frameSource1.close();
                // if (frameSource2) await frameSource2.close();
                // await fs.remove(tmpDir);
                console.log('done');
                // return 
            }
            return;
        };
        this.CanvasKit = CanvasKit;
        this.args = args;
        this.context = this.CanvasKit.currentContext();
        this.surface = this.CanvasKit.MakeSurface(this.args.width, this.args.height);
        if (!this.surface) {
            console.log('Could not make surface');
            return;
        }
        this.skcanvas = this.surface.getCanvas();
        this.paint = new this.CanvasKit.Paint();
        this.fontMgr = this.CanvasKit.FontMgr.RefDefault();
        //@ts-ignore
        this.roboto = new this.CanvasKit.Font(this.fontMgr.MakeTypefaceFromData(robotoData), 24);
    }
}
exports.Renderer = Renderer;
function starPath(CanvasKit, X = 128, Y = 128, R = 116) {
    let p = new CanvasKit.Path();
    p.moveTo(X + R, Y);
    for (let i = 1; i < 8; i++) {
        let a = 2.6927937 * i;
        p.lineTo(X + R * Math.cos(a), Y + R * Math.sin(a));
    }
    return p;
}
