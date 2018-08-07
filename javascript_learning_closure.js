//javascript uses something called lexical scoping
//this is simple example of closures
//anything that is outside is available inside as well
//anything which is inside is not available outside
//any place where u are using variable from outside in a
//function then it is a cloure

var passed =3;

var addTo = function() {
  var inner= 2;
  return inner + passed;
}
console.dir(addTo) //closure 4
console.log(addTo())
var passed =4;
console.log(addTo())
console.dir(addTo)//closure 4


var addNum  = function(outer){
  return function(inner){
     return inner + outer;
  }
}
 console.log(addNum(3)(5))
 //functions with perserved data
 console.dir(addNum(3)) // closure on passed as well as outer




 let name = "Karthika";

 var callOutName = () => {
     return name;
 }
 console.log(callOutName())

 //here lexical scoping is happening
 //output is Karthika

//block scoping
let sayHi;
if (true){
  let greet = "Hi";

  sayHi = () => {
    return greet;
  }
}

console.log(sayHi())
console.dir(sayHi)
//here its block scoping

let batmintonAmt = () => {
   let hrsPlayed = 3;
   return () => {
      return hrsPlayed*300; 
   }
}

console.dir(batmintonAmt);
console.dir(batmintonAmt());
console.log(batmintonAmt());

//it will have closure for values which are used
//and not the one which is not used 


let batmintonAmt2 = () => {
   let hrsPlayed = 3;
   let fixedRt = "300rs";
   return () => {
      return hrsPlayed*300; 
   }
}

console.dir(batmintonAmt2());
// here closure is only on hrsPlayed


//common interview question

//below is the example of functional scope
//here same i reference value is being changed throughout
//the set timout will be pushed to call queue 
//by the time function is executed the i's value is 3
for(var i = 0; i< 3; i++ ){
  setTimeout(() => {
      console.log(i);
  }, 1000)
}
console.log("loop cycle completed")

//immediatelly invoked function expressions can be used to prevent
//this from happening
for(var i = 0; i< 3; i++ ){
  ((i) => {setTimeout(() => {
      console.log(i);
  }, 1000)
  })(i);
}
console.log("loop cycle completed")

//below is the example for Block scope as we use let instead of var
//as every loop ends a new i will be created, 3 different i are present, each i for each block
//hence there will be closure over it

for(let i = 0; i< 3; i++ ){
  setTimeout(() => {
      console.log(i);
  }, 1000)
}
console.log("loop cycle completed")

//NEW learnings

for (let i=0; i<10; i++){
  setTimeout(function(){
    console.log(i);
  }, 100)
}
//ans: 0 1 2 3 4 5 6 7 8 9

for (let i=0; i<10; i++){
  setTimeout(function(i){
    console.log(i);
  }, 100)
}

//ans: undefined undefined undefined.....10 times

for (var i=0; i<10; i++){
  ((i) => setTimeout(function(){
    console.log(i);
  }, 100))();// i not being passed here
}
//ans: undefined undefined undefined.....10 times
//this is because i is not available 
