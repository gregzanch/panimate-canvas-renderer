import { readFile } from "fs";
import { join } from "path";

export async function loadFonts(fonts: string[]): Promise<ArrayBuffer[]> {
  return new Promise((resolve, reject) => {
    const buffers = [] as ArrayBuffer[];
    fonts.forEach((font) => {
      readFile(join(process.cwd(), "res/fonts", font), (err, data) => {
        if (err) return reject(err);
        buffers.push(data);
        if (buffers.length == fonts.length) {
          resolve(buffers);
        }
      });
    });
  });
}
