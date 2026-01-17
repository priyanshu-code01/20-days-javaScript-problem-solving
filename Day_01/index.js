// question 1
// Print Numbers from 1 to N
let N = 20;

for (let i = 1; i <= N; i++) {
    console.log(i)
}

// question 2
// Print Numbers from N to 1 without changing the loop condition of above question
for (let i = N; i > 0; i--) {
    console.log(i)
}

// question 3
// Print All Even Numbers from 1 to N
for (let i = 1; i <= N; i++) {
    i % 2 === 0 ? console.log(i) : null
}

// question 4
// Sum of First N Natural Numbers
// Brute force (time taking)
let sum = 0;
for (let i = 1; i <= N; i++) {
    sum += i
}
console.log(sum)

// optimize solution
console.log((N * (N + 1)) / 2)

// question 5
// Product (Factorial) of N
let arrNum = []
for (let i = 2; i <= N; i++) {
    arrNum.push(i)
}
let result = arrNum.reduce((a, b) => {
    return a * b
})
console.log(result)

// question 6
// Sum of All Even Numbers up to N
let arrEven = [];
for (let i = 0; i <= N; i++) {
    if (i % 2 === 0) {
        arrEven.push(i)
    }
}
let sumEven = arrEven.reduce((a, b) => {
    return a + b
})
console.log(sumEven)

// question 7
// Print Squares of Numbers from 1 to N

for (let i = 1; i <= N; i++) {
    console.log(i * i)
}

// question 8
// Print all numbers divisible by 3 and 5 up to N
for (let i = 0; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i)
    }
}

// question 9
// Find the sum of all odd numbers up to N
let arrOdd = []
for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
        arrOdd.push(i)
    }
}
let sumOdd = arrOdd.reduce((a, b) => {
    return a + b
})
console.log(sumOdd)

// question 10
// Print the cubes of numbers from 1 to N
let i = 1
while (i <= N) {
    console.log(i * i * i)
    i++
}

// question 11
// Print only the numbers that are both even and perfect squares
for (let i = 2; i <= N; i += 2) {
    console.log(i * i)
} 