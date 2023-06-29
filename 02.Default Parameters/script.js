//Default Parameters.
//The default parameter is a way to set default values for function parameters a value is no passed in (ie. it is undefined).

// ===========================Examples=================================
//Normal function
// function add (a,b){
   
//     return a+b;
    
// }
// console.log(add(5,5));


// =================Default Parameter====================================

// function add(a,b=20){
//     return a+b;
// }
// console.log(add(10));

// output:30

// ================Passing Function as Params=============================
//Example-01
// function add(a,b=20,c=addition()){
//     return a+b+c;
// }

// function addition(){
//     return 100;
// }

// console.log(add(30));

// Output:150

// =========================Example-02==========================================
// function add(a,b=" Name",c=addition()){
//     return a+b+c;
// }

// function addition(){
//     return " is lav";
// }
// console.log(add("My"));

// Output:My Name is lav


//Questions.
function main(a,b=main()){
    return a+b;
}
main();

// Output:Uncaught RangeError: Maximum call stack size exceeded

