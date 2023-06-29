//Destructuring Objects.
//In destructuring objects we assign values to variables in the basis of key by using curly brackets.

// ======================Examples=========================================================

// let obj ={name:"lav", email:"lav@gmail.com", mob:82873833}
// let {mob} =obj
// console.log(mob);
//output:82873833


// ====================By Default Value====================================================

//example-01:
// let obj ={name:"lav", email:"lav@gmail.com", mob:82873833}
// let {name, mobile=48394} =obj
// console.log(mobile);
//output:48394

//example-02:
// let obj ={name:"lav", email:"lav@gmail.com", mob:82873833}
// let {name, mob=48394} =obj
// console.log(mob);
//output:82873833

// ====================Destructuring of object by using rest operator======================

//example-01:
// let user ={name:"lav",email:"lav@gmail.com",mob:8140}
// let {...email}=user;
// console.log(email);
//output:{name: 'lav', email: 'lav@gmail.com', mob: 8140}

//example-02:
// let user ={name:"lav",email:"lav@gmail.com",mob:8140}
// let {mob,...email}=user;
// console.log(email);
//output:{name: 'lav', email: 'lav@gmail.com'}