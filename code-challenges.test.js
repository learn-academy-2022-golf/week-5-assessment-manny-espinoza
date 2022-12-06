// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
// Pseudocode
    // Create describe statement. Give a name to your function ("secretFunction"), follow with anonymous function syntax.
    // Create it statement. Describe the function's purpose, follow with anonymous function syntax.
    // Per set of given variables (secretCodeWord / secretOutput variables), create an expect statement.
    // Within expect statement provide the argument of the function name and respective variable. Append with .toEqual() and provide the argument of the respective variable.

describe("secretFunction", () => {
    it("takes in a string and returns a string with a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        const secretOutput1 =  "L4ck4d41s1c4l"
        expect(secretFunction(secretCodeWord1)).toEqual(secretOutput1)
        const secretCodeWord2 = "Gobbledygook"
        const secretOutput2 = "G0bbl3dyg00k"
        expect(secretFunction(secretCodeWord2)).toEqual(secretOutput2)
        const secretCodeWord3 = "Eccentric"
        const secretOutput3 = "3cc3ntr1c"
        expect(secretFunction(secretCodeWord3)).toEqual(secretOutput3)
    })
})

// $ yarn jest (results)
// ReferenceError: secretFunction is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.
// Pseudocode
// Create function (secretFunction). Set str as its parameter, so upon function invocation it may take any string as an argument.
const secretFunction = (str) => {
    // Split the string into an array and save it to a new variable. We utilize .splice() in this function, but it is an array only method.
    let spl = str.split('')
    // Use a for loop, and specify starting/ending parameters, and how to increment through the array.
    for (let i = 0; i < spl.length; i++) {
        // Using conditionals, use .splice() to replace a, e, i, or o with 4, 3, 1, or 0 respectively.
        if (spl[i] === 'a' || spl[i] === 'A') {
            spl.splice(i, 1, '4')
        } else if (spl[i] === 'e' || spl[i] === 'E') {
            spl.splice(i, 1, '3')
        } else if (spl[i] === 'i' || spl[i] === 'I') {
            spl.splice(i, 1, '1')
        } else if (spl[i] === 'o' || spl[i] === 'O') {
            spl.splice(i, 1, '0')
        }
    }
    // Join the array back into a string and save it to a new variable.
    let back = spl.join('')
    // Return that variable.
    return back
}

// $ yarn jest (results)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// Pseudocode
    // Create describe statement. Give a name to your function ("wordsAndLetter"), follow with anonymous function syntax.
    // Create it statement. Describe the function's purpose, follow with anonymous function syntax.
    // Per set of given variables (letterA & letterE / letterAOutput & letterEOutput variables), create an expect statement.
    // Within expect statement provide the argument of the function name and respective variable. Append with .toEqual() and provide the argument of the respective variable.

describe("wordsAndLetter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        const letterAOutput = ["Mango", "Apricot", "Peach"]
        expect(wordsAndLetter(fruitArray, letterA)).toEqual(letterAOutput)
        const letterE = "e"
        const letterEOutput = ["Cherry", "Blueberry", "Peach"]
        expect(wordsAndLetter(fruitArray, letterE)).toEqual(letterEOutput)
    })
})

// $ yarn jest (results)
// ReferenceError: wordsAndLetter is not defined
// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 total

// b) Create the function that makes the test pass.
// Pseudocode
// Create function (wordsAndLetter). Input array and string within parameters.
const wordsAndLetter = (arr, str) => {
    // Create an empty array. We push to this array the words containing the particular letters we've selected.
    let newArr = []
    // Utilizing a for loop, specify the starting/ending parameters and how to increment through it.
    for (let i = 0; i < arr.length; i++) {
        // Utilizing a conditional statement, check to see if the array at the current index contains our selected letter. Include a .toLowerCase() method to ensure that lower and uppercase letters are checked for.
        if (arr[i].toLowerCase().includes(str)) {
            // If our array at current index contains our wanted letter, push it to the empty array we've created from above.
            newArr.push(arr[i])
        }
    }
    // Return newArr.
    return newArr
}

// $ yarn jest (results)
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

const wordsAndLetter2 = (arr, str) => {
    return arr.filter(i => i.toLowerCase().includes(str))
}
// just me figuring out how to use HOFs to solve this problem.. much easier!!



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
// Pseudocode
    // Create describe statement. Give a name to your function ("fullHouse"), follow with anonymous function syntax.
    // Create it statement. Describe the function's purpose, follow with anonymous function syntax.
    // Per set of given variables (hand / handOutput variables), create an expect statement.
    // Within expect statement provide the argument of the function name and respective variable. Append with .toEqual() and provide the argument of the respective variable.

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const handOutput1 = true
        expect(fullHouse(hand1)).toEqual(handOutput1)
        const hand2 = [5, 5, 3, 3, 4]
        const handOutput2 = false
        expect(fullHouse(hand2)).toEqual(handOutput2)
        const hand3 = [5, 5, 5, 5, 4]
        const handOutput3 = false
        expect(fullHouse(hand3)).toEqual(handOutput3)
        const hand4 = [7, 2, 7, 2, 7]
        const handOutput4 = true
        expect(fullHouse(hand4)).toEqual(handOutput4)
    })
})

// $ yarn jest (results)
// ReferenceError: fullHouse is not defined
// Test Suites: 1 failed, 1 total
// Tests:       3 failed, 3 total

// b) Create the function that makes the test pass.
// Pseudocode
// Create function (fullHouse) that takes in an array.
const fullHouse = (arr) => {
    // Utilize a for loop, and specify starting/ending parameters and how to increment through it. Note that we stop at the third index (fourth element). This is because we will be fine stopping the comparisons here, as by this point all of the cards have been looked through.
    for (let i = 0; i <= 3; i++) {
        // Set a count variable initialized to equal 1. Every time a matching card comes up, that count gets incremented by 1, signifying the number of alike cards there are.
        let count = 1
        // Utilize another for loop, with variable j. This way, we can compare two cards next to each other and see if they are a match.
        for (let j = i + 1; j < arr.length; j++) {
            // If the element at positions i and j are a match, we increment the count by one.
            if (arr[i] === arr[j]) {
                count++
            }
        // We only want to say this is true if the count is 3 (signifying a full house). Otherwise it is not a full house.
        } if (count === 3) {
            return true
        } else {
            return false
        }
    }
}

// $ yarn jest (results)
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total