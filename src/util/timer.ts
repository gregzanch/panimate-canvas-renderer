import { assert } from "console";

const TimerUnits = {
  ms: (val: number) => val,
  s: (val: number) => val/1000,
  min: (val: number) => val/60000,
  hr: (val: number) => val/3600000
}

export class Timer {
  times = new Map<string, number>();
  unit: keyof typeof TimerUnits;
  constructor(unit?: keyof typeof TimerUnits){
    this.unit = unit || "s";
  }
  start = (key: string) => {
    this.times.set(key, Date.now());
  }
  stop = (key: string) => {
    assert(this.times.has(key), `key ${key} not declared yet!`);
    const dt =  Date.now() - this.times.get(key)
    this.times.set(key, dt);
    return dt;
  }
  print = (key?: string) => {
    const unit = this.unit;
    const fn = TimerUnits[unit];
    const formatfn = (val:number) => fn(val).toFixed(4)+unit;
    if(key){
      assert(this.times.has(key), `key ${key} not declared yet!`);
      console.log(key+":", formatfn(this.times.get(key)))
    }
    else{
      this.times.forEach((val, key)=>{
        console.log(key+":", formatfn(val));
      })
    }
  }
}


export const time = () => {
  const t0 = Date.now();
  return () => Date.now() - t0;
}

export default Timer;