console.log("sunshine papi")

console.log(document)

console.log(document.querySelector("#main-title")) //  output: <h1 id="main-title" class="title">Intro to the DOM</h1> (app.js, line 5)
// You could also find console.log(document.querySelector("h1")) bc there's only one h1

const titleElement = document.querySelector("#main-title")

console.log(titleElement)

console.dir(titleElement) // grabs element from directory allows us to see properties

console.log(document.querySelector("p"))

const paragraphElement = (document.querySelector("p")) // or (".cool") can also 

// "use doc.querysel to select the <p> element with a class of cool and assign it to a variable named paragraphElement"
console.log(paragraphElement) // output: <p>...

console.dir(paragraphElement.textContent) // let's use .dir to get in the habit

// how to modify element
paragraphElement.textContent = "The placeholder text is gone!"

console.dir(paragraphElement.textContent)

if (paragraphElement.textContent !== "") {
    console.log("The paragraph has text content!")
}

titleElement.style.textAlign = "center"

paragraphElement.style.color = "blue"

//how to create an element
const bodyElement = document.querySelector("body")

console.dir(bodyElement)

const h2Element = document.createElement("h2")

console.dir(h2Element)

h2Element.textContent = "Comments Section" 
// when referring to something not yet on the page, we refer to it as "in memory" like "living in the cloud"

bodyElement.appendChild(h2Element)

const commentElements = document.querySelectorAll("#comments li") // selects all li / list items under the #comments ID
// space look for the element that has the id of comments then get all the decsendents
// greater than sign only brings back direct "descendents"

console.log(commentElements)

//iterating over a collection of elements
commentElements.forEach((commentElement) => {
    console.log(commentElement.textContent)
    commentElement.style.fontSize = "10px"
})
// to specify li in position 1 is a specific font size
commentElements.forEach((commentElement, idx) => {
    if (idx === 1) {
    commentElement.style.fontSize = "30px"
    }
})
// commentElements.forEach((commentElement) => {
//     console.log(commentElement.textContent);
//   })


  
