//Generator Function.
// The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
//Yied-The yield operator is used to pause and resume a generator function.

function* steps(){
    let a=20;
    let b=10;
    console.log(a+b);
    yield "Step 1 Completed"
    console.log(a*b);
    yield "Step 2 Completed"
    console.log(a-b);
    yield "Step 3 Completed"
    return "all steps completed"
}

 let a = steps();
   function getSteps(){
        //calling generator function by using next() function.
        return console.log(a.next());
   }

  //output:30
        //{value: 'Step 1 Completed', done: false}
        //200
        //{value: 'Step 2 Completed', done: false}
        //10
        //{value: 'Step 3 Completed', done: false}
        //{value: 'all steps completed', done: true}
