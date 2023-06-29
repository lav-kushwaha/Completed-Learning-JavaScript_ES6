//Spread Operator.
// The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.


// =================================Examples=====================================

//Normal Example without Spread operator.
// let fruits=["Apple","Banana","Mango"]

// function PrintAll(a,b,c){
//     console.log(a,b,c)
// }

// PrintAll(fruits[0],fruits[1],fruits[2]);

//Example With Spread Operator.
// let fruits=["Apple","Banana","Mango"]
// function PrintAll(...a) //rest operator.
// {
//     console.log(a)
// }
// PrintAll(...fruits); //spread operator.

//output:['Apple', 'Banana', 'Mango']

//Example-01:

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined);
//output:[1, 2, 3, 4, 5, 6]


//Example-02:

// const fruits = ["Apple","Banana","Mango"]
// const Allfruits =["Orange",...fruits,"Kiwi","Pineapple"]
// console.log(Allfruits);
//output: ['Orange', 'Apple', 'Banana', 'Mango', 'Kiwi', 'Pineapple']


//Example-03: Combine these two objects: 

//  const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }

//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
//   console.log(myUpdatedVehicle)
  //output:{brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021}

  //Example-04
//   const fruits = ["Apple","Banana","Mango"]
//   const newFruits = fruits;
//   newFruits.push("test");
//   console.log(newFruits);// ['Apple', 'Banana', 'Mango', 'test']
//   console.log(fruits); // ['Apple', 'Banana', 'Mango', 'test']

  //with spread operator
  const fruits = ["Apple","Banana","Mango"]
  const newFruits = [...fruits];
  newFruits.push("test");
  console.log(newFruits);//['Apple', 'Banana', 'Mango', 'test']
  console.log(fruits); //['Apple', 'Banana', 'Mango']