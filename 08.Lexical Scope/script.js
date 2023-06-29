//Lexical Scope.

// =================Example 01============================

//lexical scope for this with arrow function.
// let data = {
//     list :'friend',
//     names:['bruce','peter','sam'],
//     getFriends:function(){
//         this.names.map((items)=>{
//             console.log(this.list,items)
//         })
//     }
// }
// data.getFriends();

//ouput:friend bruce
// friend peter
// friend sam

// =================Example 02============================

//lexical scope for this with named function
// let data = {
//   list: "friend",
//   names: ["bruce", "peter", "sam"],
//   getFriends: function () {
//         let a = this.list;
//     this.names.map(function(items) {

//       console.log(a, items);
//     });
//   },
// };
// data.getFriends();

//ouput:friend bruce
// friend peter
// friend sam


// =================Example03=================================

// lexical scope for this with named function
let data = {
  list: "friend",
  names: ["bruce", "peter", "sam"],
  getFriends: function () {
    this.names.map(function(items) {
      console.log(this.list, items);
    });
  },
};
data.getFriends();

// output:undefined 'bruce'
// undefined 'peter'
// undefined 'sam'

// note:In this case this.list is not works

