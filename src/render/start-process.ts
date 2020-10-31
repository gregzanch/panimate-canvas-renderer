import execa from "execa";
import { FfmpegLogLevel } from "../types/ffmpeg-log";
import { RenderParams } from "../types/render-params";

const toString = (x: any) => x.toString() as string;

export function startProcess(params: RenderParams) {
  const {
    fast,
    outPath,
    loopAudio,
    loglevel,
    hideBanner,
    width,
    height,
    framerate,
    audioFilePath,
    verbose,
    ffmpegPath,
  } = params;
  // https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality

  // -f image2pipe -framerate 1 -i - -c:v libx264 -vf format=yuv420p -r 25 -movflags +faststart out.mp4

  const args = [
    ...(hideBanner ? ["-hide_banner"] : []),
    ...["-loglevel", loglevel],

    ...["-f", "image2pipe"],
    // ...([ '-f', 'rawvideo']),
    // ...(['-vcodec', 'rawvideo']),
    // ...(['-pix_fmt', 'rgba']),

    ...["-r", framerate],
    ...["-s", `${width}x${height}`],
    ...["-i", "-"],
    ...(audioFilePath && loopAudio ? ["-stream_loop", "-1"] : []),
    ...(audioFilePath ? ["-i", audioFilePath, "-shortest"] : []),
    ...["-map", "0:v:0"],
    ...(audioFilePath ? ["-map", "1:a:0"] : []),
    ...(audioFilePath ? ["-acodec", "aac"] : []),
    ...(audioFilePath ? ["-b:a", "128k"] : []),
    ...["-vf", "format=yuv420p"],
    ...["-c:v", "libx264"],
    ...["-profile:v", "high"],
    ...(fast ? ["-preset:v", "ultrafast"] : ["-preset:v", "medium"]),
    ...["-crf", "18"],
    ...["-r", framerate],
    ...["-movflags", "+faststart"],
    ...["-y", outPath],
  ].map(toString);

  if (verbose) console.log("ffmpeg", args.join(" "));
  return execa(ffmpegPath, args, {
    encoding: null,
    buffer: false,
    stdin: "pipe",
    stdout: process.stdout,
    stderr: process.stderr,
  });
}

export default startProcess;
