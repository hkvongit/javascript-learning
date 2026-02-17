/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = Object.create({});

  if (s.length !== t.length) return false;

  for (let char of s) {
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  for (let chara of t) {
    if (!map[chara]) return false;
    map[chara] -= 1;
  }
  return true;
};

console.log(isAnagram("rat", "car"));
