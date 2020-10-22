
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  for (let i = 0; i < matrix.length; i++) {
    if  (i % 2 === 1) {
      matrix[i] = matrix[i].reverse();
    }
  }
  let newMatrix = [];
  for (let m = 0; m < matrix.length; m++) {
    for (let n = 0; n < matrix[m].length; n++) {
      newMatrix.push(matrix[m][n]);
    }
  }
  return newMatrix;
}
