import { FfmpegLogLevel } from "./ffmpeg-log";

export interface RenderParams {
  ffmpegPath: string;
  verbose: boolean;
  audioFilePath: string;
  loopAudio: boolean;
  fast: boolean;
  framerate: number;
  duration: number;
  height: number;
  width: number;
  outPath: string;
  loglevel: string;
  hideBanner: boolean;
  assets: { [key: string]: string };
  camera: Camera;
  groups: Group[];
}

export interface Camera {
  position: number[];
}

export interface Group {
  position: number[];
  words: string[];
  timestamps: [number, number][];
  images: Image[];
}

export interface Image {
  description: string;
  id: string;
  role: string;
}
