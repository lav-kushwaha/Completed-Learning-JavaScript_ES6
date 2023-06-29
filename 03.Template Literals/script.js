//Template Literals.
//Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

// ===========================Examples===================================
//Normal Strings.
// let text = "either you run the code or code runs you";
// let name = "lav kushwaha";

//Template Literals String.

// let name ="Lav Kushwaha"
// let text = `either you run the codes or code runs you ${name}`
// console.log(text);

//Template literals allows multiline strings:
//Example-02
// let text =`The quick
// brown fox
// jumps over
// the lazy dog`;
// console.log(text)


//Paasing function in template literals.
//Example-03
function name(){
    return "Lav Kushwaha";
}
let text = `Hello My Name is ${name()}`
console.log(text);





