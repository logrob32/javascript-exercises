const sumAll = function (num1, num2) {
  if (
    Number.isInteger(num1) &&
    Number.isInteger(num2) &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    let topNumber = num1;
    let bottomNumber = num2;
    if (num1 <= num2) {
      topNumber = num2;
      bottomNumber = num1;
    }
    let total = 0;
    for (let i = bottomNumber; i <= topNumber; i++) {
      total += i;
    }
    return total;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
