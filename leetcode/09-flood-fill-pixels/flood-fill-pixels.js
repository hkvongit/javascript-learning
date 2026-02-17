// Stack based solution

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 * Example
 *  Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
 *  Output: [[2,2,2],[2,2,0],[2,0,1]]
 */
var floodFill = function (image, sr, sc, color) {
  let stack = [];
  const imageLen = image.length;
  const imageElementLen = image[0].length;
  if (sr > imageLen) return null;
  if (sc > 2) return null;

  const target = image[sr][sc];
  if (target === color) return image;
  image[sr][sc] = color;
  stack.push([sr, sc]);

  while (stack.length > 0) {
    // i is row pointer & j is column pointer
    let [i, j] = [...stack[stack.length - 1]];
    stack.pop();
    // vertical elements
    if (0 <= i + 1 && i + 1 < image.length && image[i + 1][j] === target) {
      image[i + 1][j] = color;
      stack.push([i + 1, j]);
    }
    if (0 <= i - 1 && i - 1 < image.length && image[i - 1][j] === target) {
      image[i - 1][j] = color;
      stack.push([i - 1, j]);
    }

    // horizontal elements
    if (0 <= j + 1 && j + 1 < imageElementLen && image[i][j + 1] === target) {
      image[i][j + 1] = color;
      stack.push([i, j + 1]);
    }
    if (0 <= j - 1 && j - 1 < imageElementLen && image[i][j - 1] === target) {
      image[i][j - 1] = color;
      stack.push([i, j - 1]);
    }
  }
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
