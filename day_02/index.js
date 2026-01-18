// question 1
// Find the Maximum of Three Numbers
function maxOfThree(a, b, c) {
  let max;
  if (a >= b && a >= c) {
    max = a;
  } else if (b >= c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}
console.log(maxOfThree(23, 63, 11));

console.log(Math.max(23, 43, 53));

// // question 2
// // Check if a Number is Positive, Negative, or Zero
function CheckNumSign(a) {
  if (a > 0) {
    return "Positive";
  } else if (a < 0) {
    return "Negative";
  }
  return "Zero";
}
console.log(CheckNumSign(5));

// // question 3
// // Calculate Electricity Bill
function checkBill(unit) {
  let total = 0;
  if (unit <= 100) {
    total = unit * 5;
  } else if (unit <= 200) {
    total = 100 * 5 + (unit - 100) * 7;
  } else if (unit <= 300) {
    total = 100 * 5 + 100 * 7 + (unit - 200) * 10;
  } else {
    total = 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12;
  }
  return total;
}
console.log(checkBill(250));

// // question 4
// // Check if a Character is a Vowel or Consonant
function checkVowel(char = "0") {
  if ("aeiou".includes(char.toLowerCase()) && char !== "") {
    return "Vowel";
  } else if (/[a-z]/.test(char.toLowerCase())) {
    return "Consonent";
  } else {
    return "Not a valid character";
  }
}
console.log(checkVowel("e"));

// // question 5
// // Check if a Year is a Leap Year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  }
  return `${year} is not a leap year`;
}
console.log(isLeapYear(1900));

// // question 6
// // Check if a Character is Uppercase, Lowercase, Digit, or Special Character
function checkChar(char) {
  if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
    return "Lowercase";
  } else if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
    return "Uppercase";
  } else if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
    return "Number";
  } else if (
    (char.charCodeAt() >= 33 && char.charCodeAt() <= 47) ||
    (char.charCodeAt() >= 58 && char.charCodeAt() <= 64) ||
    (char.charCodeAt() >= 91 && char.charCodeAt() <= 96) ||
    (char.charCodeAt() <= 123 && char.charCodeAt() <= 126)
  ) {
    return "Special Character";
  }
}
console.log(checkChar("6"));

// question 7
// Check Triangle Type Using Sides and Angles
function typeOfTriangle(a, b, c) {
  const sq = (x) => Math.round(x ** 2);
  const isRightAngled =
    sq(a) + sq(b) === sq(c) ||
    sq(b) + sq(c) === sq(a) ||
    sq(c) + sq(a) === sq(b);
  const isEquilateral = a === b && b === c;
  const isIsosceles = a === b || b === c || c === a;

  if (isRightAngled && isIsosceles) {
    return "It is a right-angled isosceles triangle";
  } else if (isRightAngled) {
    return "It is a right-angled triangle";
  } else if (isEquilateral) {
    return "It is a equilateral triangle";
  } else if (isIsosceles) {
    return "It is a isosceles triangle";
  } else {
    return "It is a scalene triangle";
  }
}
console.log(typeOfTriangle(3, 4, 5));

// question 8
// Calculate Income Tax Based on Slabs
function calcTax(income) {
  let tax = 0;
  if (income > 1000000) {
    tax += (income - 1000000) * 0.3;
    income = 1000000;
  }
  if (income > 500000) {
    tax += (income - 500000) * 0.2;
    income = 500000;
  }
  if (income > 250000) {
    tax += (income - 250000) * 0.05;
    income = 250000;
  }
  return tax;
}
console.log(calcTax(750000));
