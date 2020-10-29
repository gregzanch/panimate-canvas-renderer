import { CanvasKit } from "canvaskit-wasm";
import CanvasKitInit from "canvaskit-wasm/bin/canvaskit";
import fs from "fs";
import path from "path";
import { Renderer } from "./render/renderer";
import {locateFile} from './locate';
import {FfmpegArgs, startProcess} from './render/start-process';

CanvasKitInit({ locateFile }).then(main).catch(console.error);



function main(CanvasKit){
  const renderer = new Renderer(CanvasKit, {
    ffmpegPath: "/usr/local/bin/ffmpeg",
    audioFilePath: "res/audio/dream.wav",
    enableFfmpegLog: false,
    fast: false,
    outPath: "out/out.mp4",
    loopAudio: true,
    verbose: false,
    framerate: 24,
    duration: 30,
    height: 500,
    width: 500
  });

  console.time("nek");
  renderer.run().catch(console.log).finally(()=>{
    console.timeEnd("nek");
    process.exit(0);
  })


}

