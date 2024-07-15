console.log("There she goes again")

const myString = "hello!"
//                012345

console.log(myString.charAt(1)) // exp out: 2

console.log(myString.toUpperCase())

console.log(myString.length) // expected outcome: 6

let myNewString = ""   // empty string

for (let i = 0; i < myString.length / 2; i++) { // halfway through the string -> " / 2 "
    
    console.log(myNewString, "myNewString Before")
    
    const currentLetter = myString.charAt(i)
    const capitalizedCurrentLetter = currentLetter.toUpperCase()

    myNewString = `${myNewString}${capitalizedCurrentLetter}`

    console.log(myNewString, "myNewString After")
}
const lastHalfOfWord = myString.slice(myString.length / 2) // exp out: last half of the word

console.log(lastHalfOfWord)

myNewString = `${myNewString}${lastHalfOfWord}`

console.log(myNewString)

// So important to take BABY STEPS to work through your code!


const music2 = {} // this object has zero properties on it

const music = {
    // currentTrack: "Just Ken", // use trailing commas so it looks better when you commit
    currentTrack: "Just Ken",
    volume: 70,               
    trackIdx: 0,
    mute() {
        music.volume = 20 // no arrow functions when we create a method; stick with function declarations
    },
    // next() {                This function can go inside the object literal as shown or ne outside as written below
    //     music.trackIdx += 1;
    //   },
}
music.mute = function() {  // this function does the same as the above
    music.volume = 0       // this is outside the "object"
}

music.currentPlaylist = ["Just Ken", "Hey Blondie"] // objects can hold anything including arrays
                                                    
music.currentTrack = music.currentPlaylist[music.trackIdx]
                                                    
console.log(music)

console.log(music.currentPlaylist)

music.currentPlaylist.push("Sweet Home Alabama")

console.log(music.currentPlaylist)// output: [Log] ["Just Ken", "Hey Blondie", "Sweet Home Alabama"] (app.js, line 47)

console.log(typeof music) // objects will always have curly brackets {}

console.log(music.currentTrack)

music.currentTrack

console.log(Array.isArray(music.currentTrack)) //. something that tells me if it's an array or not

console.log(music)

// delete music.currentPlaylist

console.log(music)

music.myPlaylist = ["Not Like Us", "Pink and White"]

console.log(music.myPlaylist)

delete music.myPlaylist

console.log(music)

music.mute()

console.log(music) // output: volume:0

// mute the delete currentPlaylist lines above

console.log(music.currentPlaylist[music.trackIdx])


// increments the track index
music.next = function () {
    // music.trackIdx++ does the same thing as the lines below but ++ only increments by 1
    music.trackIdx += 1 // or music.trackIdx += 2  -> can increment other values 
    // music.trackIdx = music.trackIdx + 2
    music.currentTrack = music.currentPlaylist[music.trackIdx]
}
music.next()

console.log(music.currentPlaylist[music.trackIdx])

console.log(music.currentTrack)

music.next()
console.log(music.currentTrack)
console.log(music.currentPlaylist[music.trackIdx]) 




/* SEB LECTURE 4 - Js Objects "Data Structures"
const music = {
    // currentTrack: "Just Ken", // use trailing commas so it looks better when you commit
    currentTrack: "Just Ken",
    volume: 70,               
    trackIdx: 0,
    currentPlaylist: ["Just Ken", "Hey Blondie", "What Was I Made For", "Dance The Night"],
    mute() {
        music.volume = 0 // No arrow functions when we create a method; stick with function declarations
    },
    next() {                //This function can go inside the object literal as shown or ne outside as written below
        music.trackIdx += 1;
        music.currentTrack = music.currentPlaylist[music.trackIdx]
    },
}
    */

music.currentPlaylist = [
    {
        title: 'Just Ken',          // 0
        artist: 'Ryan Gosling',
        album: 'Barbie The Album',
        length: '3:43',
      }, {
        title: 'Hey Blondie',        // 1
        artist: 'Dominic Fike',
        album: 'Barbie The Album',
        length: '2:21',
      }, {
        title: 'What Was I Made For',   // 2
        artist: 'Billie Eilish',
        album: 'Barbie The Album',
        length: '3:42',
      }, {
        title: 'Dance The Night',       // 3
        artist: 'Dua Lipa',
        album: 'Barbie The Album',
        length: '2:56',
      }
]

console.log(music.currentPlaylist[0]) // output: "Just Ken" object...

console.log(music.currentPlaylist[1].title) // output: "Hey Blondie" object bc it's in the "1" position

music.currentPlaylist[2].length = "3:54"
console.log(music.currentPlaylist[2].length)

