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
