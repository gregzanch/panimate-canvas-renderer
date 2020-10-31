import {
  Canvas,
  CanvasKit,
  Font,
  FontMgr,
  Paint,
  SkottieAnimation,
  Surface,
  Typeface,
  PathCommand,
  RuntimeEffect,
  InputRect,
} from "canvaskit-wasm";
import { readFileSync } from "fs";
import { parse } from "../util/svg-parser";
import parseSVG from "svg-path-parser";
import Colors from "../util/colors";
import { parseTransform } from "../util/parse-transform";
import { AnyTxtRecord } from "dns";
export type SvgRendererParams = {
  filepath: string;
};

export class SvgRenderer {
  filepath: string;
  dom: any;
  CanvasKit: CanvasKit;
  props: any;
  viewBox: [number, number, number, number];
  constructor(CanvasKit: CanvasKit, args: SvgRendererParams) {
    this.filepath = args.filepath;
    this.dom = parse(readFileSync(this.filepath, "utf-8"));
    this.parse(CanvasKit);
  }
  parse = (CanvasKit) => {
    const setProps = (props) => {
      this.props = props;
      if (this.props.viewBox) {
        this.viewBox = this.props.viewBox.split(" ").map((x) => Number(x));
      }
      console.log(this.props);
    };
    function parseSvgPaths(svg) {
      if (svg.children && svg.children.length > 0) {
        for (let i = 0; i < svg.children.length; i++) {
          if (svg.children[i].type === "element") {
            switch (svg.children[i].tagName) {
              case "svg":
                setProps(svg.children[i].properties);
                parseSvgPaths(svg.children[i]);
                break;
              case "ellipse":
                parseSvgPaths(svg.children[i]);
                break;
              case "circle":
                parseSvgPaths(svg.children[i]);
                break;
              case "rect":
                parseSvgPaths(svg.children[i]);
                break;
              case "g":
                parseSvgPaths(svg.children[i]);
                break;
              case "path": {
                svg.children[i].Path = CanvasKit.MakePathFromSVGString(
                  parseSVG(svg.children[i].properties.d)
                    .map((y) => {
                      return Object.keys(y)
                        .filter((z) => z !== "command" && z !== "relative")
                        .map((z, i) => (i > 0 ? Number(y[z]) : y[z]));
                    })
                    .join(" ")
                );
                parseSvgPaths(svg.children[i]);
              }
              default:
                break;
            }
          }
        }
      }
    }
    parseSvgPaths(this.dom);
  };

  render = (CanvasKit: CanvasKit, paint: Paint, skcanvas: Canvas) => {
    function renderSvgChildren(svg) {
      if (svg.children && svg.children.length > 0) {
        for (let i = 0; i < svg.children.length; i++) {
          if (svg.children[i].type === "element") {
            switch (svg.children[i].tagName) {
              case "svg":
                renderSvgChildren(svg.children[i]);
                break;
              case "g":
                renderSvgChildren(svg.children[i]);
                break;
              case "ellipse":
                const { cx, cy, rx, ry } = svg.children[i].properties;
                const inputRect = [cx, cy, rx, ry];
                const opacity = svg.children[i].properties["opacity"] || "1";
                paint.setAlphaf(Number(opacity));
                const fill = svg.children[i].properties["fill"];
                if (fill) {
                  const fillColor = CanvasKit.parseColorString(Colors[fill] || fill);
                  paint.setColor(fillColor);
                  paint.setStyle(CanvasKit.PaintStyle.Fill);
                  skcanvas.drawOval(inputRect, paint);
                }

                const stroke = svg.children[i].properties["stroke"];
                if (stroke) {
                  paint.setStrokeMiter(svg.children[i].properties["stroke-miterlimit"] || 2);
                  paint.setStrokeCap(svg.children[i].properties["stroke-linecap"] || "round");
                  paint.setStrokeJoin(svg.children[i].properties["stroke-linejoin"] || "round");
                  paint.setStrokeWidth(svg.children[i].properties["stroke-width"] || 0);

                  paint.setColor(CanvasKit.parseColorString(Colors[stroke] || stroke));
                  paint.setStyle(CanvasKit.PaintStyle.Stroke);
                  skcanvas.drawOval(inputRect, paint);
                }

                renderSvgChildren(svg.children[i]);
                break;

              case "circle":
                {
                  const { cx, cy, r } = svg.children[i].properties;

                  const opacity = svg.children[i].properties["opacity"] || "1";
                  paint.setAlphaf(Number(opacity));
                  const fill = svg.children[i].properties["fill"];
                  if (fill) {
                    const fillColor = CanvasKit.parseColorString(Colors[fill] || fill);
                    paint.setColor(fillColor);
                    paint.setStyle(CanvasKit.PaintStyle.Fill);
                    skcanvas.drawCircle(cx, cy, r, paint);
                  }

                  const stroke = svg.children[i].properties["stroke"];
                  if (stroke) {
                    paint.setStrokeMiter(svg.children[i].properties["stroke-miterlimit"] || 2);
                    paint.setStrokeCap(svg.children[i].properties["stroke-linecap"] || "round");
                    paint.setStrokeJoin(svg.children[i].properties["stroke-linejoin"] || "round");
                    paint.setStrokeWidth(svg.children[i].properties["stroke-width"] || 0);

                    paint.setColor(CanvasKit.parseColorString(Colors[stroke] || stroke));
                    paint.setStyle(CanvasKit.PaintStyle.Stroke);
                    skcanvas.drawCircle(cx, cy, r, paint);
                  }

                  renderSvgChildren(svg.children[i]);
                }
                break;

              case "path": {
                if (svg.children[i].Path) {
                  if (svg.children[i].properties.transform) {
                    const matrix = parseTransform(svg.children[i].properties.transform);
                    matrix && svg.children[i].Path.transform(matrix);
                  }

                  const fill = svg.children[i].properties["fill"] || "";
                  if (fill) {
                    // console.log(fill);
                    const fillColor = CanvasKit.parseColorString(Colors[fill] || fill);
                    const opacity = svg.children[i].properties["opacity"] || "1";
                    // fillColor[3] = Number(opacity);
                    paint.setAlphaf(Number(opacity));
                    paint.setColor(fillColor);
                    paint.setStyle(CanvasKit.PaintStyle.Fill);
                    skcanvas.drawPath(svg.children[i].Path, paint);
                  }

                  const stroke = svg.children[i].properties["stroke"] || "";
                  if (stroke) {
                    paint.setColor(CanvasKit.parseColorString(Colors[stroke] || stroke));

                    const strokeMiterlimit = svg.children[i].properties["stroke-miterlimit"] || "";
                    strokeMiterlimit && paint.setStrokeMiter(strokeMiterlimit);

                    const strokeWidth = svg.children[i].properties["stroke-width"] || "";
                    strokeWidth && paint.setStrokeWidth(strokeWidth);

                    const linecap = svg.children[i].properties["stroke-linecap"] || "";
                    linecap && paint.setStrokeCap(linecap);

                    const linejoin = svg.children[i].properties["stroke-linejoin"] || "";
                    linejoin && paint.setStrokeJoin(linejoin);

                    paint.setStyle(CanvasKit.PaintStyle.Stroke);
                    skcanvas.drawPath(svg.children[i].Path, paint);
                  }
                }

                renderSvgChildren(svg.children[i]);
              }
              default:
                break;
            }
          }
        }
      }
    }
    renderSvgChildren(this.dom);
  };
}

export default SvgRenderer;
