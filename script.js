const getCube = (num) => {
  return num * num * num;
};

const getSquare = (num) => {
  return num * num;
};

const findDuplicate = (arr) => {
  // Returns false if no duplicate number
  // Returns number if it finds duplicate number
  if (!arr) {
    return false;
  }

  const numsInArr = {};

  for (let i = 0; i < arr.length; i++) {
    if (numsInArr[arr[i]]) {
      return arr[i];
    } else {
      numsInArr[arr[i]] = true;
    }
  }
  return false;
};

module.exports = {
  getCube,
  getSquare,
  findDuplicate,
};
