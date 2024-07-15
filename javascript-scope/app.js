console.log("this works!")
console.log("this still works")

const addNums = (numA) => {
    const numB = 10

    console.log(numA + numB)
}

addNums(10)
addNums(20)

// console.log(numA) -> if you run this you'll get an error 
// because numA is not defined outside of the curly braces

for (let i = 0; i <10; i++) {
    const myName = "David"

    console.log(i)
    console.log(myName)
}

let isLoggedIn = true

if (isLoggedIn) {
    const username = "Frisco"

    console.log(username)
}

// console.log(myName) -> if you run this you'll get an error 
// because username is not defined outside of the curly braces

const chooseDinner = () => {
    let isHungry = true
    let mainDish
    
    if (isHungry) {
    let mainDish = "meatloaf"
    } else { 
        mainDish = "corn"
    }
    console.log(`dinner tonight is ${mainDish}`)
}
chooseDinner() // this is what calls the function. 
// If you take it away, you won't see the console.log line
// Building functions is like PRE CODING -- you have to call it to RUN 

let a = 4;

const foo = (x) => {
  let b = a * 4;

  const bar = (y) => {
    let c = y * b;
    return c;
  }

  return bar(b);
}

console.log(foo(a));
