"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const jsonc_parser_1 = require("jsonc-parser");
function readJSON(filepath) {
    const p = path_1.default.isAbsolute(filepath) ? filepath : path_1.default.join(process.cwd(), filepath);
    return jsonc_parser_1.parse(fs_1.default.readFileSync(p, 'utf-8'));
}
exports.readJSON = readJSON;
