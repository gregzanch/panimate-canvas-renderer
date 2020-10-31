import fs from 'fs';
import path from 'path';
import {parse} from 'jsonc-parser';

export function readJSON(filepath: string){
  const p = path.isAbsolute(filepath) ? filepath : path.join(process.cwd(), filepath);
  return parse(fs.readFileSync(p, 'utf-8'));
}