/**
 * Returns random float value from min to max [min,max)
 * @param min Minimum value
 * @param max Maximum value
 * @returns Random float value
 */
export const randomFloat = (min = 0, max = 1) => {
  return min + Math.random() * (max - min);
};

/**
 * Returns random int value from min to max [min,max)
 * @param min Minimum value
 * @param max Maximum value
 * @returns Random int value
 */
export const randomInt = (min = 0, max = 1) => {
  return Math.floor(randomFloat(min, max));
};
