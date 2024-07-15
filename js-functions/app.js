console.log('back again for more')

function printBanner(text) {
    console.log("============")
    console.log(text)
    console.log("============")
}
printBanner("This is my banner! Woo.")

if (2 ===2) {
    printBanner()
}


function sayHello(name) {
    console.log(`Hello ${name}`)
}
sayHello("Hannah")

sayHello("Mom")

sayHello("Loretha")

// parmeters -- placeholders (name)
// arguments are the actual values that we give to these placeholders
// (hannah, mom, Loretha)

function add(numA, numB) {
    console.log(numA)
    console.log(numB)
    console.log(numA + numB)
}
add(4, 5)
add(10, 2)

function planetHasWater(planet) {
    if (planet === "Earth" || planet === "Mars") {
        console.log(true)
    } else if (planet === "Pluto") {
        console.log(`This is not a planet`)
    } else {
        console.log(false)
    }
}
planetHasWater("Earth")
planetHasWater("Uranus")
planetHasWater("Pluto")

function add(numA, numB) {
    console.log(numA)
    console.log(numB)
    console.log(numA + numB)
    return numA + numB
}
let a = 1

function changA() {
    a = 2
} 

// example of a f where we aren't returning anything 
// we're just changing a

add(4, 5)
add(10, 2)

console.log(add(4,5), "we are calling the add function here, this is what it returns")
add(10,2)

function addOne(num) {
    // return 'this is some text'
    return num + 1
}
console.log(addOne(3))

const incrementedNum = addOne(3)
const addedNums = add(5, 4)

console.log(incrementedNum + addedNums);

function add(numA, numB) {
    return numA + numB
}

const subtract = function(numA, numB) {
    return numA - numB
}

const subtractArrowFunction = (numA, numB) => {
    return numA - numB
} // arrow function expression note that there is no "fuction" written out

console.log(subtractArrowFunction(5, 4))

function square(num) {
    return num * num;
  }
console.log(square(4))

const squareArrowFunction = (num) => {
    return num * num
}
console.log(squareArrowFunction(4))

