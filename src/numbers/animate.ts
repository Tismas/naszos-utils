interface Options {
  minValue?: number;
  maxValue?: number;
  speed?: number;
  loop?: boolean;
  initialProgress?: number;
}

export const createAnimator =
  ({
    minValue = 0,
    maxValue = 1,
    speed = (maxValue - minValue) / 100,
    loop = false,
    initialProgress = 0,
  }: Options = {}) =>
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
