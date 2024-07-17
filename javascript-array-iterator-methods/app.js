console.log("test")

const favFoods = ['tacos', 'cheese', 'freeze pops']


// for loop -----------------------------------------------------------

// for loop is an imperative function code: more definition to it / tells comp how to iterate

for (let i=0; i < favFoods.length; i++) {
    console.log(favFoods[i]) // if you put a 1 here, you get an infinite loop
}

// forEach loop - declarative or "functional" code: just tells the computer to 
favFoods.forEach((food)=> {
    console.log(favFoods)
})

const array = ['apple', 'banana', "orange"]  // red squigglies are called "glinting" or "linting". Hover over to see problem tp fix in code


favFoods.forEach((element, index, array) => {
    console.log(element)
    console.log(index)
    console.log(array)
})

// map method -----------------------------------------------------------

// map transforms the elements of one array into another array

const mappedArray = array.map((element, index, array) => {
    return `element is: ${element}, index is: ${index}, array is: ${array}`
})

console.log(mappedArray)


// const nums = [1, 2, 3]

// const squared = nums.map((num) => {
//     //code block
//     return num * num 
// })
// console.log(squared)

/*

 [] <-- before any iterations
 [1] <-- after first iteration
 [1, 4] <-- after second iteration

*/

const instructors = ['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David']

instructors.map((instructor) => {
    console.log(`${instructor} is awesome`)
}) 
// return instructor + ` is awesome' --> is another less elegant to write that console.log

// if you're storing the results as a variable then you would need to write the function below like:

const awesomeInstructors = instructors.map((instructor) => {
    return (`${instructor} is awesome`)
}) 
console.log(awesomeInstuctors)


const arr1 = [true, false, true, false, false, true]

const filteredArr1 = arr1.filter((element) => {
  return element;
})

console.log(filteredArr); // [true, true, true]

// filter() method ---------------------------------------------


const arr = [true, false, 0, 'string', '', null, undefined, 42]

const filteredArr = arr.filter((element) => {
  return element;
});
console.log(filteredArr); // [true, 'string', 42]

// const nums2 = [100, 2, 5, 42, 99]

// const odds = nums2.filter((num2) => {
//     return num2 % 2
// })
// console.log(odds)

const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];

const jerkFree = people.filter((person) => {
    return person === 'nice people'
})
console.log(jerkFree)

// find() method -----------------------------

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];
  
const firstWhiteCar = cars.find((car) => {
    return car.color === 'white';
})
console.log(firstWhiteCar)// firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}
  
const missingCar = cars.find((car) => {
    return car.color === 'black';
});
console.log(missingCar) // missingCar = undefined (because there is no black car element in our array )

// findIndex method ---------------------------------

const firstWhiteCarIdx = cars.findIndex((car) => {           
    return car.color === 'white';
});
console.log(firstWhiteCarIdx)  // firstWhiteCarIdx equals 1
  

const missingCarIdx = cars.findIndex((car) => {
    return car.color === 'black';
});
  console.log(missingCarIdx) // missingCarIdx = -1 (because the index number doesn't exist)

  // some () method ---------------------------------------

   const  hasFord = cars.some((car) => {
    return car.make === 'Ford';
   })
   console.log(hasFord) // true (because there is a Ford in our Array)
  

const thingsInMyRoom = [
    'random elephant', 
    'random elephant', 
    'random elephant', 
    'random elephant'
  ];
  
  const isEverythingInMyRoomARandomElephant = thingsInMyRoom.some((thing) => {
    return thing === 'random elephant'  
  })
console.log(isEverythingInMyRoomARandomElephant) // true

// every() method -----------------------------------------

const everyCarIsBlue = cars.every((car) => {
    //return car.color === "blue"
    return car.year > 50 // is every car older than 50 years, if
})
console.log(everyCarIsBlue) // false (because not every car is blue)
console.log()

// const nums.forEach(() => {  // old way of doing it from last week arrays lab. more elegantw way above
//     total += num
// })
// console.log(total)

// Level up conetn 
// reduce() ---------------------------------------------------

const nums = [25, 5, 100, 10]

let sum = nums.reduce((accumulator, nu) => {
    console.log(`accuulator: ${accumulator}, num: ${num}`)
})


// Lesson on square brackts

const person = {
    name: "Ben",
    age: 25,
    location: "Jonestown, TX",
    pets: ["Jack", "Ruby"],
    friends: ["Jurgen", "David"]
}

let variable = 'pets'
console.log(person.location)
console.log(person[variable])

// dictionaries (python) are to objects as arrays are to lists (javaScript)

// 

const voteArr = ['yes', 'no', 'yes', 'no', 'no', 'no', 'yes', 'yes', 'no', 'no', 'maybe', 'RuPaul', 'waffles']

function voteTallyDot(arr) {
  const tally = {yes: 0, no: 0, maybe: 0}
  for (let i = 0; i < arr.length; i++) {
    const vote = arr[i]
    if (vote === 'yes') {
      tally.yes = tally.yes + 1
    } else if (vote === 'no') {
      tally.no = tally.no + 1
    } else if (vote === 'maybe') {
      tally.maybe = tally.maybe + 1
    }
  }
  return tally
}

function voteTallySquare(arr) {
  const tally = {}
  for (let i = 0; i < arr.length; i++) {
    const vote = arr[i]
    if (tally[vote]) {
      // property exists, add 1 to it
      tally[vote] += 1
    } else {
      // property doesn't exist, create it (as 1)
      tally[vote] = 1
    }
  }
  return tally
}

console.log(voteTallySquare(voteArr))

