/**
 * Syntax:
 * 
 * array.map(function(currentValue, index, arr), thisValue)
 */

/**
 * Parameters
 * callback
 * Function that produces an element of the new Array, taking three arguments:
 * ** currentValue
 * *** The current element being processed in the array.
 * ** index(Optional)
 * ** The index of the current element being processed in the array.
 * ** array(Optional)
 * *** The array map was called upon.
 * ** thisArg(Optional)
 * *** Value to use as this when executing callback.
 */

// 1
// Calling a Function on Each Item in an Array
const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})

console.log(sweeterArray) // [4, 6, 8, 10, 70]

// 2
// create a function to use
const makeSweeter = sweetItem => sweetItem * 2;

// we have an array
const sweetArray = [2, 3, 4, 5, 35];

// call the function we made. more readable
const sweeterArray = sweetArray.map(makeSweeter);

console.log(sweeterArray); // [4, 6, 8, 10, 70]

// 3
// Converting a String to an Array
const name = "Chuloo"
const map = Array.prototype.map

const newName = map.call(name, eachLetter => {
    return `${eachLetter}a`
})

console.log(newName) // ["Ca", "ha", "ua", "la", "oa", "oa"]

// 4
// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

// What you need
[20, 24, 56, 88]

// Practice:

// 1. Write a function that returns a string with each of its words reversed but in the original order, without using a loop.
// solution("The quick brown fox") == "ehT kciuq nworb xof";

function solution1(str) {
    let words = str.split(" ");
    let reversed = words.map(word => word.split("").reverse().join(""));
        
    return reversed.join(" ");
}