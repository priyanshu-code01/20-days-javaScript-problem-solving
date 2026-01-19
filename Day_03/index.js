// question 1
// Print Right-Angled Star Triangle
function rightAngledStar(row) {
  for (let i = 1; i <= row; i++) {
    console.log("*".repeat(i));
  }
}
rightAngledStar(5);

// question 2
// Print Inverted Right-Angled Triangle
function invertedRightAngled(row) {
  for (let i = row; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}
invertedRightAngled(5);

// question 3
// Print Pyramid Pattern
function pyramid(row) {
  for (let i = 1; i <= row; i++) {
    console.log(" ".repeat(row - i) + "*".repeat(2 * i - 1));
  }
}
pyramid(5);

// question 4
// Print Inverted Pyramid Pattern
function invertedPyramid(row) {
  for (let i = row; i >= 1; i--) {
    console.log(" ".repeat(row - i) + "*".repeat(2 * i - 1));
  }
}
invertedPyramid(5);

// question 5
// Print Hollow Square Pattern
function hollowSquare(row) {
  for (let i = 1; i <= row; i++) {
    let line = "";
    for (let j = 1; j <= row; j++) {
      if (i === 1 || i === row || j === 1 || j === row) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
hollowSquare(5);

// question 6
// Print Hollow Pyramid Pattern
function hollowPyramid(row) {
  for (let i = 1; i <= row; i++) {
    let line = " ".repeat(row - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1 || i === row) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
hollowPyramid(5);

// question 7
// Print Alternating Binary Triangle
function binaryTriangle(row) {
  let start = 1;
  for (let i = 1; i <= row; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += (start % 2) + " ";
      start++;
    }
    console.log(line.trim());
  }
}
binaryTriangle(5);

// question 8
// Print Hollow Inverted Pyramid
function hollowInvertedPyramid(row) {
  for (let i = row; i >= 1; i--) {
    let line = " ".repeat(row - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1 || i === row) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
hollowInvertedPyramid(5);

// question 9
// Print Butterfly Pattern
function butterfly(row) {
  for (let i = 1; i <= row; i++) {
    console.log("*".repeat(i) + " ".repeat(2 * (row - i)) + "*".repeat(i));
  }
  for (let i = row - 1; i >= 1; i--) {
    console.log("*".repeat(i) + " ".repeat(2 * (row - i)) + "*".repeat(i));
  }
}
butterfly(5);

// question 10
// Print Diamond Pattern
function diamond(row) {
  for (let i = 1; i <= row; i++) {
    console.log(" ".repeat(row - i) + "*".repeat(2 * i - 1));
  }
  for (let i = row - 1; i >= 1; i--) {
    console.log(" ".repeat(row - i) + "*".repeat(2 * i - 1));
  }
}
diamond(3);

// question 11
// Print Hourglass Pattern
function hourglass(row) {
  for (let i = row; i >= 1; i--) {
    console.log(" ".repeat(row - i) + "*".repeat(2 * i - 1));
  }
  for (let i = 2; i <= row; i++) {
    console.log(" ".repeat(row - i) + "*".repeat(2 * i - 1));
  }
}
hourglass(5);

// question 12
// Print Hollow Diamond Pattern
function hollowDiamond(row) {
  for (let i = 1; i <= row; i++) {
    let line = " ".repeat(row - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
  for (let i = row - 1; i >= 1; i--) {
    let line = " ".repeat(row - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
hollowDiamond(3);

// question 13
// Print Rhombus Pattern
function rhombus(row) {
  for (let i = 1; i <= row; i++) {
    console.log(" ".repeat(row - i) + "*".repeat(row));
  }
}
rhombus(5);

// question 14
// Print Multiplication Table (Single and Upto N)
function multiplicationTableSingle(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplicationTableSingle(5);

function multiplicationTableUpto(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
multiplicationTableUpto(3);