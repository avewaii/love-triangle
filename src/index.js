/**
 * @param preferences - an array of integers.
 Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  const inTriangles = [];

  for (let i = 0; i < preferences.length; ++i) {
      if (inTriangles.indexOf(i) !== -1) {
          continue;
      }

      let firstLoves = preferences[i] - 1;
      if (firstLoves === i) {
          continue;
      }
      let secondLoves = preferences[firstLoves] - 1;
      let thirdLoves = preferences[secondLoves] - 1;


      if (thirdLoves === i) {
          inTriangles.push(i, firstLoves, secondLoves);
          ++count;
      }
  }

  return count;
};
