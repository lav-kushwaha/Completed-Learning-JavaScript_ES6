//Global Methods
// 1.isFinite
// 2.isNaN

// ======================Examples of isFinite===================
console.log(isFinite(NaN)) //false
console.log(isFinite(null)) //true
console.log(isFinite(undefined)) //false
console.log(isFinite(10/0)) //false
console.log(isFinite({})) //false
console.log(isFinite(10/2))//true


// ======================Examples of isNaN=================
console.log(isNaN(null)) //false
console.log(isNaN("10")) //false
console.log(isNaN("10lav")) //true
console.log(isNaN(10))//false