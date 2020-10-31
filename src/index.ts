import CanvasKitInit from "canvaskit-wasm/bin/canvaskit";
import { Renderer } from "./render/renderer";
import { RenderParams } from "./types/render-params";
import { locateFile } from "./locate";
import Timer from "./util/timer";
import { readJSON } from "./util/json";

async function main(args: RenderParams) {
  const timer = new Timer();
  const CanvasKit = (await CanvasKitInit({ locateFile })) as any;

  const renderer = new Renderer(CanvasKit, args);
  await renderer.load();
  const totalFrames = args.framerate * args.duration;
  const key = `renderer.run() @ ${totalFrames}`;
  timer.start(key);
  await renderer.run();
  timer.stop(key);

  timer.print();
}

main(readJSON("test/args.jsonc")).catch(console.log);
