export const between = (v, a, b) => v >= a && v <= b;
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

/*
 * Easing Functions
 */
export const EasingFunctions = {
  /**
   * no easing, no acceleration
   */
  linear: (t: number) => t,

  /**
   *accelerating from zero velocity
   */
  easeInQuad: (t: number) => t * t,

  /**
   *decelerating to zero velocity
   */
  easeOutQuad: (t: number) => t * (2 - t),

  /**
   *acceleration until halfway, then deceleration
   */
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),

  /**
   *accelerating from zero velocity
   */
  easeInCubic: (t: number) => t * t * t,

  /**
   *decelerating to zero velocity
   */
  easeOutCubic: (t: number) => --t * t * t + 1,

  /**
   * acceleration until halfway, then deceleration
   */
  easeInOutCubic: (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),

  /**
   * accelerating from zero velocity
   */
  easeInQuart: (t: number) => t * t * t * t,

  /**
   * decelerating to zero velocity
   */
  easeOutQuart: (t: number) => 1 - --t * t * t * t,

  /**
   * acceleration until halfway, then deceleration
   */
  easeInOutQuart: (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),

  /**
   *  accelerating from zero velocity
   */
  easeInQuint: (t: number) => t * t * t * t * t,

  /**
   * decelerating to zero velocity
   */
  easeOutQuint: (t: number) => 1 + --t * t * t * t * t,

  /**
   * acceleration until halfway, then deceleration
   */
  easeInOutQuint: (t: number) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
};

const scale = (arr, a) => arr.map((x) => x * a);
const sum = (arrs) =>
  arrs[0].map((x, i) => {
    for (let j = 1; j < arrs.length; j++) {
      x += arrs[j][i];
    }
    return x;
  });
export function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const p0 = [0, 0];
  const p1 = [x1, y1];
  const p2 = [x2, y2];
  const p3 = [1, 1];

  return function B(t: number) {
    const c0 = (1 - t) ** 3;
    const c1 = 3 * (1 - t) ** 2 * t;
    const c2 = 3 * (1 - t) * t ** 2;
    const c3 = t ** 3;
    return p0[1] * c0 + p1[1] * c1 + p2[1] * c2 + p3[1] * c3;
    return sum([scale(p0, c0), scale(p1, c1), scale(p2, c2), scale(p3, c3)]);
  };
}
