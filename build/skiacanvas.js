"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skia_canvas_1 = require("skia-canvas");
const rand = n => Math.floor(n * Math.random());
let canvas = new skia_canvas_1.Canvas(600, 600), ctx = canvas.getContext("2d"), { width, height } = canvas;
// draw a sea of blurred dots filling the canvas
ctx.filter = 'blur(12px) hue-rotate(20deg)';
for (let i = 0; i < 800; i++) {
    ctx.fillStyle = `hsl(${rand(40)}deg, 80%, 50%)`;
    ctx.beginPath();
    ctx.arc(rand(width), rand(height), rand(20) + 5, 0, 2 * Math.PI);
    ctx.fill();
}
// mask all of the dots that don't overlap with the text
ctx.filter = 'none';
ctx.globalCompositeOperation = 'destination-in';
ctx.font = 'italic 480px Times, DejaVu Serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'top';
ctx.fillText('¶', width / 2, 0);
// draw a background behind the clipped text
ctx.globalCompositeOperation = 'destination-over';
ctx.fillStyle = '#182927';
ctx.fillRect(0, 0, width, height);
// save the graphic...
// canvas.saveAs("pilcrow.png")
// ...or use a shorthand for canvas.toBuffer("png")
// fs.writeFileSync("pilcrow.png", )
canvas.toBuffer("png");
// ...or embed it in a string
// console.log(`<img src="${canvas.toDataURL("png")}">`)
