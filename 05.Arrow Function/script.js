//Arrow function

// const arr = [10,20,30,40,50]
// const results = arr.map((item)=>{
//     console.log(item*2);
// })


// let item = {
//     name:"lav",
//     getName:function (){
//        console.log(this) 
//     },
//     arrowFun:()=>{
//         console.log(this)
//     }
// }

// item.getName();
// item.arrowFun();


//arrow function.
const arrow =(a)=>{
    return console.log(`Hello ${a} I am arrow function`);
}
arrow("lav");
// output:Hello lav I am arrow function