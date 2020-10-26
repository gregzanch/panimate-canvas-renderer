const CanvasKitInit = require("canvaskit-wasm/bin/canvaskit.js");
const fs = require("fs");
const path = require("path");

CanvasKitInit({
  locateFile: (file) => "node_modules/canvaskit-wasm/bin/" + file,
})
  .then((CanvasKit) => draw(CanvasKit))
  .catch(console.error);

// draws a single frame
function draw(CanvasKit) {
  let surface = CanvasKit.MakeSurface(300, 300);
  const canvas = surface.getCanvas();

  const paint = new CanvasKit.Paint();

  const fontMgr = CanvasKit.FontMgr.RefDefault();
  let robotoData = fs.readFileSync(
    path.join(__dirname, "./Roboto-Regular.ttf")
  );
  const roboto = fontMgr.MakeTypefaceFromData(robotoData);

  const textPaint = new CanvasKit.Paint();
  textPaint.setColor(CanvasKit.Color(40, 0, 0));
  textPaint.setAntiAlias(true);

  const textFont = new CanvasKit.Font(roboto, 30);

  const skpath = starPath(CanvasKit);
  const dpe = CanvasKit.PathEffect.MakeDash([15, 5, 5, 10], 1);

  paint.setPathEffect(dpe);
  paint.setStyle(CanvasKit.PaintStyle.Stroke);
  paint.setStrokeWidth(5.0);
  paint.setAntiAlias(true);
  paint.setColor(CanvasKit.Color(66, 129, 164, 1.0));

  canvas.clear(CanvasKit.Color(255, 255, 255, 1.0));

  canvas.drawPath(skpath, paint);
  canvas.drawText("Try Clicking!", 10, 280, textPaint, textFont);

  surface.flush();

  const img = surface.makeImageSnapshot();
  if (!img) {
    console.error("no snapshot");
    return;
  }
  const png = img.encodeToData();
  if (!png) {
    console.error("encoding failure");
    return;
  }
  const pngBytes = CanvasKit.getDataBytes(png);
  // See https://stackoverflow.com/a/12713326
  let buffer = Buffer.from(pngBytes).toString("base64");
  fs.writeFileSync("out.png", buffer, {
    encoding: "base64",
  });
  // console.log(`<img src="data:image/png;base64,${b64encoded}" />`);

  // These delete calls free up memeory in the C++ WASM memory block.
  dpe.delete();
  skpath.delete();
  textPaint.delete();
  paint.delete();
  roboto.delete();
  textFont.delete();

  surface.dispose();
}

function starPath(CanvasKit, X = 128, Y = 128, R = 116) {
  let p = new CanvasKit.Path();
  p.moveTo(X + R, Y);
  for (let i = 1; i < 8; i++) {
    let a = 2.6927937 * i;
    p.lineTo(X + R * Math.cos(a), Y + R * Math.sin(a));
  }
  return p;
}
