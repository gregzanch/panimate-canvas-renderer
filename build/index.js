"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvaskit_1 = __importDefault(require("canvaskit-wasm/bin/canvaskit"));
const renderer_1 = require("./render/renderer");
const locate_1 = require("./locate");
canvaskit_1.default({ locateFile: locate_1.locateFile }).then(main).catch(console.error);
function main(CanvasKit) {
    const renderer = new renderer_1.Renderer(CanvasKit, {
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
    renderer.run().catch(console.log).finally(() => {
        console.timeEnd("nek");
        process.exit(0);
    });
}
