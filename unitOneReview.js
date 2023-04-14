// ***** Variable ***** //
/* 
    Create a few variables that store a value of string (letters in "", '', ``, `${}`), number, and boolean. Choose your own topic.
*/

const myName = "Garrett"
let season = "winter"
let color = `red`
let number = 20
let numberString = '20'
let todayIsCold = false
let chiliIsSpicy = true
let pizza = null
let food
let myFavColor = `My favorite color is ${color}` // template literal
let myFavColor2 = "My favorite color is " + color  // concatenation
let myFavNumber = "My favorite number is " + number
let myFavNumber2 = `My favorite number is${number}`
console.log("My favorite number is ", number)

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguages' that include 4 coding language of your choice. 
*/

let codingLanguages = ['javaScript', 'python', 'java', 'swift', 'c++'] // [] = empty array


/* 
    Access the 3rd element of the 'codingLanguages' array.
*/

console.log(codingLanguages[2])

/*
    Copy the array using one of the array methods, and call it 'codingLanguages2.'
*/

let codingLanguages2 = codingLanguages.slice()
console.log(codingLanguages2)

/* 
    Add another coding language to the codingLanguages2 array.
*/

codingLanguages2.push("rust", "php")
console.log(codingLanguages2)

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

instruments.pop()

/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

instruments.shift()

/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

instruments.unshift('guitar')

/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

instruments.splice(2,1,'glockenspiel')
console.log(instruments)



// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/ // if(){}

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

if(num % 2 ===0){
    console.log(num)
} else {
    console.log(`${num} is not an even number.`)
}


// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

score >= 70 ? console.log('The grade is A.'): 
score >= 40 ? console.log('The grade is B.'): 
score >= 11 ? console.log('The grade is C.'):  console.log('Failed.')

// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

// for(let i = 0; i >5; i++){
// }


let totalPrice = 0

for(let i = 0; i < price.length; i++){
totalPrice = totalPrice + price[i]
console.log(totalPrice)}


/* 
    Using the 'totalPrice,' find the average of 'price.'
*/


let avgPrice = totalPrice / price.length
console.log(avgPrice)

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green','purple']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

for(let i = 0; i < colors.length; i++){
if(colors[i] === "red"){
    console.log("apple")
}else if (colors[i] === "yellow"){
    console.log("banana")
}else if (colors[i] === "green"){
    console.log("melon")
}else {console.log("ERROR")
}
}


// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git = version control software
        -- github = website, host for git repositories
        -- git init = initializes git on a folder on your machine
        -- git clone = download repository from github
        -- git status = check status of git
        -- git add = stages changes for next commit
        -- git commit = saves stage of the file in thr repository
        -- git push = pushed changes to repository to online repo at github
    - How to push git to github ---------- login to github, create repository, copy lines into local terminal, ENTER, then 'git push' updates afterward
*/

