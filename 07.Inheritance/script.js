//Class Inheritance in javascripts.
//Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
//To create a class inheritance, use the extends keyword.

// ===============================Examples==========================================

//Parent class
class Categories{
    //Creating functions
        getDryFruit(){
            return "Almond is dry Fruits";
        }
        pomeFruit(){
            return "Apple is pome fruit"
        }
}

//child class 
class Fruits extends Categories{
    constructor(){
        //The super() method refers to the parent class.
        super();
        console.log("Constructor")
    }
    getFruits(){
        return "You Got Apple";
    }
}

//Calling child class
let f1 = new Fruits();
console.log(f1.getFruits()) //You Got Apple

//Calling Parent Class
let c1 = new Categories();
console.log(f1.getDryFruit()); //Almond is Dry Fruits

