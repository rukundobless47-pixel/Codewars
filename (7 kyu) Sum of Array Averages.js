function sumAverage(arrays) {
  return arrays.reduce((total, arr) =>
    total + arr.reduce((sum, num) => sum + num, 0) / arr.length
  , 0);
   return 0.0;
}
console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4],[21, 54, 33, 21, 77]]));