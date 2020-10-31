"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const start_process_1 = require("./start-process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const timer_1 = __importDefault(require("../util/timer"));
const robotoData = fs_1.default.readFileSync(path_1.default.join(process.cwd(), "res/fonts/Roboto/Roboto-Regular.ttf"));
class Renderer {
    constructor(CanvasKit, args) {
        this.frame = 0;
        this.draw = (t = 0) => {
            if (t > this.args.duration) {
                return null;
            }
            // this.CanvasKit.setCurrentContext(this.context);
            // // this.skcanvas.clear(this.CanvasKit.WHITE);
            // const shader = this.shaders[0].makeShader([
            //   Math.sin(Date.now() / 2000) / 5,
            //   256, 256,
            //   1, 0, 0, 1,
            //   0, 1, 0, 1],
            //   true /*=opaque*/);
            // this.paint.setShader(shader);
            // this.skcanvas.drawRect(this.CanvasKit.LTRBRect(0, 0, 512, 512), this.paint);
            // shader.delete();
            this.skcanvas.clear(this.CanvasKit.Color(255, 255, 255, 1.0));
            // this.paint.setStyle(this.CanvasKit.PaintStyle.Fill);
            // this.paint.setColor(this.CanvasKit.Color(40, 0, 0));
            this.skcanvas.drawText(t.toFixed(2), 10, 280, this.paint, this.roboto);
            // for(let i = 0; i<this.animations.length; i++){
            //   const prog = (t * this.args.framerate) / (this.animations[i].duration() * this.animations[i].fps());
            //   this.animations[i].seek(prog % 1.0);
            //   this.animations[i].render(this.skcanvas);
            // }
            // this.surface.flush();
            // path.delete();
            // svgpath.delete();
            // fs.writeFileSync(`out/${this.frame++}.png`, buffer.toString("base64"), {
            //   encoding: "base64",
            // });
            //@ts-ignore
            return Buffer.from(this.CanvasKit.getDataBytes(this.surface.makeImageSnapshot().encodeToData()));
        };
        this.starPath = (X = 128, Y = 128, R = 116) => {
            let p = new this.CanvasKit.Path();
            p.moveTo(X + R, Y);
            for (let i = 1; i < 8; i++) {
                let a = 2.6927937 * i;
                p.lineTo(X + R * Math.cos(a), Y + R * Math.sin(a));
            }
            return p;
        };
        this.log = (...args) => {
            if (this.args.verbose) {
                console.log(...args);
            }
        };
        this.run = async () => {
            let outProcess;
            let outProcessError;
            try {
                outProcess = start_process_1.startProcess(this.args);
                outProcess.on('exit', (code) => {
                    this.log('Output ffmpeg exited', code);
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
                    }
                    else {
                        break;
                    }
                }
                outProcess.stdin.end();
            }
            catch (err) {
                outProcess.kill();
                throw err;
            }
            finally {
                this.log('done');
            }
            return;
        };
        this.CanvasKit = CanvasKit;
        this.args = args;
        this.timer = new timer_1.default("ms");
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
        this.animations = args.animations.map(filepath => this.CanvasKit.MakeAnimation(fs_1.default.readFileSync(path_1.default.join(process.cwd(), filepath), 'utf-8')));
        const prog = `
uniform float rad_scale;
uniform float2 in_center;
uniform float4 in_colors0;
uniform float4 in_colors1;

half4 main(float2 p) {
    float2 pp = p - in_center;
    float radius = sqrt(dot(pp, pp));
    radius = sqrt(radius);
    float angle = atan(pp.y / pp.x);
    float t = (angle + 3.1415926/2) / (3.1415926);
    t += radius * rad_scale;
    t = fract(t);
    return half4(mix(in_colors0, in_colors1, t));
}

`;
        // If there are multiple contexts on the screen, we need to make sure
        // we switch to this one before we draw.
        this.shaders = [this.CanvasKit.RuntimeEffect.Make(prog)];
        // bounds = ;
        // let firstFrame = Date.now();
    }
}
exports.Renderer = Renderer;
