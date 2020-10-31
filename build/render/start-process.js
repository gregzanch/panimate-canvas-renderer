"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startProcess = exports.FfmpegLogLevel = void 0;
const execa_1 = __importDefault(require("execa"));
var FfmpegLogLevel;
(function (FfmpegLogLevel) {
    FfmpegLogLevel["quiet"] = "quiet";
    FfmpegLogLevel["panic"] = "panic";
    FfmpegLogLevel["fatal"] = "fatal";
    FfmpegLogLevel["error"] = "error";
    FfmpegLogLevel["warning"] = "warning";
    FfmpegLogLevel["info"] = "info";
    FfmpegLogLevel["verbose"] = "verbose";
    FfmpegLogLevel["debug"] = "debug";
    FfmpegLogLevel["trace"] = "trace";
})(FfmpegLogLevel = exports.FfmpegLogLevel || (exports.FfmpegLogLevel = {}));
const toString = (x) => x.toString();
function startProcess(params) {
    const { fast, outPath, loopAudio, loglevel, hideBanner, width, height, framerate, audioFilePath, verbose, ffmpegPath } = params;
    // https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality
    // -f image2pipe -framerate 1 -i - -c:v libx264 -vf format=yuv420p -r 25 -movflags +faststart out.mp4
    const args = [
        ...(hideBanner ? ['-hide_banner'] : []),
        ...(['-loglevel', loglevel]),
        ...(['-f', 'image2pipe']),
        // ...([ '-f', 'rawvideo']),
        // ...(['-vcodec', 'rawvideo']),
        // ...(['-pix_fmt', 'rgba']),
        ...(['-r', framerate]),
        ...(['-s', `${width}x${height}`]),
        ...(['-i', '-']),
        ...(audioFilePath && loopAudio ? ['-stream_loop', '-1'] : []),
        ...(audioFilePath ? ['-i', audioFilePath, '-shortest'] : []),
        ...(['-map', '0:v:0']),
        ...(audioFilePath ? ['-map', '1:a:0'] : []),
        ...(audioFilePath ? ['-acodec', 'aac'] : []),
        ...(audioFilePath ? ['-b:a', '128k'] : []),
        ...(['-vf', 'format=yuv420p']),
        ...(['-c:v', 'libx264']),
        ...(['-profile:v', 'high']),
        ...(fast ? ['-preset:v', 'ultrafast'] : ['-preset:v', 'medium']),
        ...(['-crf', '18']),
        ...(['-r', framerate]),
        ...(['-movflags', '+faststart']),
        ...(['-y', outPath])
    ].map(toString);
    if (verbose)
        console.log('ffmpeg', args.join(' '));
    return execa_1.default(ffmpegPath, args, { encoding: null, buffer: false, stdin: 'pipe', stdout: process.stdout, stderr: process.stderr });
}
exports.startProcess = startProcess;
exports.default = startProcess;
