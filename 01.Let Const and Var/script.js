 // =================Var=================
//  var a = 10;
//  if(true){
//      var a=20;
//      console.log(a) // 20
//  }
//  console.log(a); //20 

// ================Let====================
//  let a = 10;
 
//  if(true){
//      let a=20;
//      console.log(a) //20
//  }
//  console.log(a); //10


// for(var i=0; i<10; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000);
// }
//  output:Only 10 Print 10times
//Reasons:Bcz var is global scope.


// ==================let vs var===========================

// for(let i=0; i<10; i++){
//     setTimeout(()=>{
//         console.log(i);
//     })
// }
// output:0
//        1
//        2
//        3
//        4
//        5
//        6
//        7
//        8
//        9
// Reason:Bcz let is block scope


