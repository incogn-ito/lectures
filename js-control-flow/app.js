console.log("this works!")

if (3 >= 1 + 2) {
    console.log(true)
}

let playerScore = 11000

if (playerScore > 1000) {
    console.log(true)
}

if (true || false) {
    console.log(true)
}
// print: all true so far

if (2 === 4 || 2 === 2) {
    console.log(true)
}
/*
prints true as well but if 2 === 2 becomes 2 === 3 
then no value will be returned 
*/

console.log(!true)
// prints: false

if (2 !== 3) {
    console.log(true)
}
// prints: true

const val = 2

const otherVal = 1

if (val === 1) {
    console.log("This code runs because val is 1")
}

if (val === 1) {
    console.log("val is one")
} else{
    console.log("val is not one")
}

if (val === 1) {
    console.log("val is one")
} else if (val === 2) {
    console.log("val is two")
} else if (val === 3) {
    console.log("val is three")
} else {
    console.log("not one, two or three")
} // if you have more than one "else" you can use "else if"

const color = 'guava'

if (color === 'green') {
    console.log('Go')
} else if (color === 'yellow') {
    console.log('Slow')
} else if (color === 'red') {
    console.log('Stop')
} else {
    console.log('Whatever')
}

// Looping // command + backslash to "group comment"
// for (let i = 5; i > 0; i = i - 1) {
//     console.log(i)
// }

// for (let i = 1; i <= 20; i++) {
// console.log(`${i} squared is ${i * i}`)
// } 
// OR the solution below!

for (let i = 1; i <= 20; i++) {
let iSquared = i * i
console.log(iSquared)
}
