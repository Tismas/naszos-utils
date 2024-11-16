/** Options for createAnimator function */
export interface AnimatorOptions {
  minValue?: number;
  maxValue?: number;
  speed?: number;
  loop?: boolean;
  initialProgress?: number;
}

/**
 *
 * @param {AnimatorOptions} options
 * @returns Tick function which returns a value from minValue to maxValue with every call. If loop is set to true it will go back from maxValue to minValue, otherwise it will reset the value to minValue when reaching maxValue
 */
export const createAnimator =
  ({
    minValue = 0,
    maxValue = 1,
    speed = (maxValue - minValue) / 100,
    loop = false,
    initialProgress = 0,
  }: AnimatorOptions = {}) =>
  (): number => {
    initialProgress += speed;
    let outOfBoundaries = false;

    if (initialProgress < minValue) {
      initialProgress = minValue;
      outOfBoundaries = true;
    }
    if (initialProgress > maxValue) {
      initialProgress = maxValue;
      outOfBoundaries = true;
    }

    if (outOfBoundaries) {
      if (loop) {
        speed = -speed;
      } else {
        initialProgress = minValue;
      }
    }

    return initialProgress;
  };
