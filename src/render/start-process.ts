import execa from 'execa';

export interface FfmpegArgs {
  fast: boolean; 
  outPath: string;
  loopAudio: boolean;
  enableFfmpegLog: boolean;
  width: number;
  height: number;
  framerate: number;
  audioFilePath: string;
  verbose: boolean;
  ffmpegPath: string;
}

const toString = (x: any) => x.toString() as string;

export function startProcess(params: FfmpegArgs) {
  const {fast, outPath, loopAudio, enableFfmpegLog, width, height, framerate, audioFilePath, verbose, ffmpegPath} = params;
  // https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality



  
  const enableFfmpegLogArg = enableFfmpegLog ? [] : ['-hide_banner', '-loglevel', 'error'];
  

  // const fmtArg = [ '-f', 'rawvideo'];
  const fmtArg = [ '-f', 'image2pipe'];
  const vcodecArg = ['-vcodec', 'rawvideo'];
  const pix_fmtArg = ['-pix_fmt', 'rgba'];
  const sizeArg = ['-s', `${width}x${height}`];
  
  // https://stackoverflow.com/questions/46397240/ffmpeg-image2pipe-producing-broken-video#46410435
  // const framerate = ['-r', framerate.toString()],
  const framerateArg = ['-framerate', 1];
  const inputArg = ['-i', '-'];
  const mapv0Arg = ['-map', '0:v:0'];
  const loopAudioArg = loopAudio ? ['-stream_loop', '-1'] : [];
  const audioInput = audioFilePath ? ['-i', audioFilePath, '-shortest'] : [];
  const audioInputArg = audioFilePath ? [...loopAudioArg, ...audioInput] : [];
  const mapa0Arg = audioFilePath ? ['-map', '1:a:0'] : [];
  const acodecArg = audioFilePath ? ['-acodec', 'aac'] : [];
  const bitRateArg = audioFilePath ?  [ '-b:a', '128k'] : [];

  const vf = ['-vf', 'format=yuv420p'];
  // const vcodec = ['-vcodec', 'libx264'];
  const rArg = ['-r', framerate];
  const vcodec = ['-c:v', 'libx264'];
  const profile = ['-profile:v', 'high'];
  const preset = fast ? ['-preset:v', 'ultrafast'] : ['-preset:v', 'medium'];
  const crf = ['-crf', '18'];
  const movflags = ['-movflags', '+faststart'];
  const y = ['-y', outPath];
// -f image2pipe -framerate 1 -i - -c:v libx264 -vf format=yuv420p -r 25 -movflags +faststart out.mp4

  const args = [
    ...enableFfmpegLogArg,
    ...fmtArg,
    // ...vcodecArg,
    // ...pix_fmtArg,
    ...sizeArg,
    // ...framerateArg,

    ...inputArg,

    ...audioInputArg,

    ...mapv0Arg,

    ...mapa0Arg,
    ...acodecArg,
    ...bitRateArg,

    ...vf,
    ...vcodec,
    ...profile,
    ...preset,
    ...crf,
    ...movflags,
    ...y
  ].map(toString);

  if (verbose) console.log('ffmpeg', args.join(' '));
  return execa(ffmpegPath, args, { encoding: null, buffer: false, stdin: 'pipe', stdout: process.stdout, stderr: process.stderr });
}

export default startProcess;