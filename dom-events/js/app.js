

// const likeButtonElement = document.querySelector("#Like-button") 

// console.dir(likeButtonElement)  // going to listen for the like button

// let numLikeClicks = 0

// likeButtonElement.addEventListener("click", () => {    // global variable so it lives outside the function
//     console.log("You clicked me!")
//     // numLikeClicks++          // now we have a variable that is increnting
//     // console.log(numLikeClicks)
//     // if (numLikeClicks === 15) {
//     //     console.log("you clicked me 15 times, ouch!")
//     // }
// })


const likeButtonElement = document.querySelector('#like-button') 
const commentButtonElement = document.querySelector('#comment-button')
const commentListElement = document.querySelector('ul');
const inputElement = document.querySelector('input')
const dislikeButtonElement = document.querySelector("#dislike-button")

// console.dir(likeButtonElement)  // going to listen for the like button
// console.dir(commentButtonElement)
// console.dir(commentListElement)
// console.dir(inputElement)
// console.dir(dislikeButtonElement)


let likesCount = 0 // stored outside of the function to keep running after function is done
let dislikesCount = 0

// function handleReaction(event) {
//     console.dir(event.target) // same value as below. It's equiv to like/dislike button
//     console.log(likeButtonElement) // same as above
//     likesCount++
//     //likesCount = likesCount +1
//     //likesCount += 1
//     console.log(likesCount)
//     likeButtonElement.textContent = `${likesCount} like(s). Like this post!`
// // const handleLike = () => {
// //     console.log('You clicked me!')
// // }
// }

function handleReaction(event) {
    if (event.target.id === "like button") {
    //console.dir(event.target) // same value as below. It's equiv to like/dislike button
    console.log(likeButtonElement) // same as above
    likesCount++
    //likesCount = likesCount +1
    //likesCount += 1
    console.log(likesCount)
    likeButtonElement.textContent = `${likesCount} like(s). Like this post!`
    if (dislikeButtonElement.hasAttribute("disabled") === true){
        dislikeButtonElement.removeAttribute("disabled")
    } // "element attributes"
    likeButtonElement.classList.toggle("green-btn")
    } else {
        dislikesCount++
        dislikeButtonElement.textContent = `${dislikesCount} dislike(s). Dislike this post!`
    }
}
likeButtonElement.addEventListener('click', handleReaction)
dislikeButtonElement.addEventListener('click', handleReaction)

console.log(dislikeButtonElement.id)
  
commentButtonElement.addEventListener("click", () => {
    // console.dir(inputElement)
    // console.dir(inputElement.value)  // this is the value of the text 
    console.log("I work!")

    if (inputElement.value !== "") {       
        return // this is a simpler way to do this
       /* if ("another condition") {
            if ("yet another condtioner") {
            }
        } you want to try to avoid nesting -- it gets convoluted */
    }
})
    const commentElement = document.createElement('li')
    //console.dir(commentElement);
    commentElement.textContent = inputElement.value  // changed to string 
    commentListElement.appendChild(commentElement)
    //console.dir(commentListElement);

