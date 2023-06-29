//Destructuring Array.

// ==============Destructuring of array with rest operator================
//Examples:
// const colorArr=["red","yellow","blue","green"]
// const[first,...rest]=colorArr;

// console.log(first); //red
// console.log(rest);//["yellow", "blue", "green"]
// console.log(...rest);//yellow blue green

//Examples:skip value.
const colorArr=["red","yellow","blue","green"]
const[first, ,third]=colorArr;

console.log(first);//red
console.log(third);//blue


//========================Swap Variables with Destructuring=====================
// const edibles = ["food", "fruits"];

// let [positionOne, positionTwo] = edibles;
// const temp = positionOne;

// positionOne = positionTwo;
// positionTwo = temp;
// console.log(positionOne, positionTwo);

//output:fruits, food