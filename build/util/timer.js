"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = exports.Timer = void 0;
const console_1 = require("console");
const TimerUnits = {
    ms: (val) => val,
    s: (val) => val / 1000,
    min: (val) => val / 60000,
    hr: (val) => val / 3600000
};
class Timer {
    constructor(unit) {
        this.times = new Map();
        this.start = (key) => {
            this.times.set(key, Date.now());
        };
        this.stop = (key) => {
            console_1.assert(this.times.has(key), `key ${key} not declared yet!`);
            const dt = Date.now() - this.times.get(key);
            this.times.set(key, dt);
            return dt;
        };
        this.print = (key) => {
            const unit = this.unit;
            const fn = TimerUnits[unit];
            const formatfn = (val) => fn(val).toFixed(4) + unit;
            if (key) {
                console_1.assert(this.times.has(key), `key ${key} not declared yet!`);
                console.log(key + ":", formatfn(this.times.get(key)));
            }
            else {
                this.times.forEach((val, key) => {
                    console.log(key + ":", formatfn(val));
                });
            }
        };
        this.unit = unit || "s";
    }
}
exports.Timer = Timer;
exports.time = () => {
    const t0 = Date.now();
    return () => Date.now() - t0;
};
exports.default = Timer;
