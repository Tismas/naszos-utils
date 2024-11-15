/** Create an array of numbers from start to end-1 (or from 0 to given number -1)
 * @param start First value if second argument is provided. If that's the only argument it's treated as end param and range starts from 0
 * @param end Last value will equal to end-1
 * @param step By how much each value should increase
 * @returns Array of numbers [start, end) where each value increases by step
 */
export const range = (start: number, end?: number, step = 1) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  let arr = [];
  for (let i = start; i < end; i += step) arr.push(i);
  return arr;
};
