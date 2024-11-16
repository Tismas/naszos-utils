/**
 * Clamps a value between a minimum and maximum value
 * @param value Value to be clamped
 * @param min Minimum value
 * @param max Maximum value
 * @param onOutOfBounds Function to be called if value is out of bounds
 * @returns Clamped value
 */
export const clamp = (
  value: number,
  min: number,
  max: number,
  onOutOfBounds?: VoidFunction
): number => {
  if (value < min) {
    onOutOfBounds?.();
    return min;
  }
  if (value > max) {
    onOutOfBounds?.();
    return max;
  }
  return value;
};

export const clampLeft = (
  value: number,
  min: number,
  onOutOfBounds?: VoidFunction
): number => {
  return clamp(value, min, Infinity, onOutOfBounds);
};

export const clampRight = (
  value: number,
  max: number,
  onOutOfBounds?: VoidFunction
): number => {
  return clamp(value, -Infinity, max, onOutOfBounds);
};
