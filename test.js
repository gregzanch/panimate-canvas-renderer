var parseSVG = require("svg-path-parser");
var parse = require("parse-svg-path");
var abs = require("abs-svg-path");
var p = require("svg-parser");
// var normalize = require('normalize-svg-path')
const fs = require("fs");

fs.readFileSync("res/svgs/test.txt", "utf8")
  .split("\n")
  .slice(1)
  .forEach((x) => {
    // p.parse(x); //?
    parseSVG(x).map((y) => {
      return Object.keys(y)
        .filter((z) => z !== "command" && z !== "relative")
        .map((z, i) => (i > 0 ? Number(y[z]) : y[z])); //
    }); //?
    abs(parse(x)); //?
  });
// rX,rY rotation, arc, sweep, eX,eY
