/**
 * Interpolates between start and end value
 * @param start Minimum value
 * @param end Maximum value
 * @param progress Value from 0 to 1
 * @returns Interpolated value
 */
export const lerp = (start: number, end: number, progress: number): number => {
  if (progress < 0 || progress > 1) {
    throw new Error(
      `Progress can't be lower than 0 or greater than 1. It was ${progress}`
    );
  }

  return start + (end - start) * progress;
};
