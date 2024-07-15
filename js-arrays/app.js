console.log("hello sunshine")

const nums = [2, 4, 18]

const movies = ["Barbie", "Intersteller", "Get Out"]
//               0            1             2           3
// "movies" will always be limited to this container
// what is inside the container can change

console.log(movies[0])

// const firstMovie = movies[2]

// console.log(firstMovie)

const idx = 0
const firstMovie = movies[idx]

console.log(movies.length)

const lastMoview = movies[movies.length - 1]
console.log(lastMoview)

const colors = ['red', 'green', 'blue'];
let color = colors[1];
console.log(colors[1])
// expected output: green

movies[1] = "Arrival"

console.log(movies)

movies.push("Parasite", "Dune")
console.log(movies)
// movies is ['Barbie', 'Arrival', 'Get Out', 'Parasite', 'Dune']

movies.pop()
movies.pop() // .pop = removes one item at a time so 2 elements have been removed
console.log(movies)
// expected output: "Barbie", "Arrival", "Get Out"

const removedMovie = movies.pop() // (removes Get Out)
console.log(movies)
movies.pop() // removes one more movie (removes Arrival)
console.log(movies)

console.log(removedMovie) //  expected: Get Out
console.log(movies) // expected: Barbie

movies.push("Coco", "Shrek") // you can push more than one element
console.log(movies) // expected: Barbie, Coco, Shrek (all in "")

for (let idx = 0; idx < movies.length; idx++) {
    console.log(idx) /* expected: 0, 1, 2: bc it will return the 
    value of the last element in the array. Note that line 54 will run mult times */
    console.log(movies[idx])
}

for (let movie of movies) {
    console.log(movies)
}

for (let idx = 0; idx < movies.length; idx++) {
    console.log(`${idx + 1}: ${movies[idx]}`)
}

// for...of loop
let counter = 1
for (let movie of movies) {
    console.log(`${counter}: ${movie}`)
    counter++
}
movies.forEach((movie) => { // "for each movie in the movies array, I want to do this:
    console.log(movie) // expected: Barbie, Coco, Shrek
})

let movieCounter = 1 // my movies will be numbered 
movies.forEach((movie) => { // "for each movie in the movies array, I want to do this:
    console.log(`${movieCounter}: ${movie}`)
    movieCounter++
})
// Do it above way or below to get same result. Why?

movies.forEach((movie, idx) => {
    console.log(`${idx + 1}: ${movie}`)
}) // this is more efficient bc we get the idx variable "for free"



// EXTRA CREDIT =-> it's okay if you don't understand the code below
consoleLogElements = (element) => {
    console.log(element)
}
movies.forEach(consoleLogElements)

const cars = ["truck", "car", "van"]

