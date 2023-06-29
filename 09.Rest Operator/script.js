//Rest Operator(...)
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

 const fruits =(...a)=>{
        console.log('Fruits Name',a);
 }

function name(){
    return "Banana"
}

 let a = fruits("apple","ball","cat","dog",name())

 //output:Fruits Name
//   ['apple', 'ball', 'cat', 'dog', 'Banana']