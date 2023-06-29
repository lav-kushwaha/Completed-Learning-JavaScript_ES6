//Classes in javascript
// JavaScript Classes are templates for JavaScript Objects.

class Students{
    //Creating variable
    name = "Lav Kushwaha"
    constructor(){
        console.log("My Name is",this.name) //My Name is Lav Kushwaha
    }
    //creating function
    addition(a,b){
        return a+b;
    }

}
//we can call class like this:
let a = new Students() //or like this let a = new Students

console.log(a.name)
//Output:Lav Kushwaha

let results =a.addition(20,30);
console.log(results);
//output:50
