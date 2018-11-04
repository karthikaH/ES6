//Fat arrows in ES6


var Func = function(){
  this.val = 1;
  setTimeout(function(){
    this.val++;
    console.log(this.val);
  },1000); 
}

var newFunc = new Func();
 
// output is NaN because this inside settimeout function would be this inside that function itself - belongs to that function's scope
// It doesnt recognize the outer this


// Solution to above problem

var Func = function(){
  var that = this;
  this.val = 1;
  setTimeout(function(){
    that.val++;
    console.log(that.val);
  },1000); 
}

var newFunc2 = new Func();
// output: 2

// Solution using fat arrow
// Fat arrow does not have its own this, it uses it's paren's this and binds it

var Func = function(){
  this.val = 1;
  setTimeout(() => {
    this.val++;
    console.log(this.val);
  },1000); 
}

var newFunc3 = new Func();
// output: 2


// Fat arrow syntax

var valueOf = a => a;
var sum = (a,b) => {return a+b};

console.log(valueOf(1));
console.log(sum(100000,100));

// output: 1
// output: 100100


//for normal functions - for n number of arguments 
// we leave () as empty and can use arguments[] array to access the values


var aFunc = function(){
  console.log(arguments[3]);
}

aFunc(1,2,3,4,5);
// output: 4

//for fat arrow functions there is no arguments array
// we cannot leave () as empty 
// Instead we use spread operator

var aFunc2 = (...n) => {
  console.log(n[3]);
}

aFunc2(1,2,3,4,5);
//output: 4

// some more points on spread operator

let  x = [1,2,3,4];
let y = x; // its not a copy, its a reference

y.push(6);
console.log(x);
console.log(y);

let  x1 = [1,2,3,4];
let y1 = Object.assign([], x1); //creates shallow copy, doesnot copy prototypes 

y1.push(8);
console.log(x1);
console.log(y1);


let  x2 = [1,2,3,4];
let y2 =  [...x2]; //same as Object.assign

y2.push(10);
console.log(x2);
console.log(y2);

//output:
//[1,2,3,4,6] 
//[1,2,3,4,6] 
//[1,2,3,4] 
//[1,2,3,4,8] 
//[1,2,3,4] 
//[1,2,3,4,10] 

//spread operator can help in merging two arrays
console.log([...x1,...y1]);
//spread operator can help in merging two arrays
console.log(x2.concat(...y2));
//output
//[1,2,3,4,1,2,3,4,8] 
//[1,2,3,4,1,2,3,4,10] 



// points to remember regarding arguments[]
// arguments is array like object -- so it does not have all the properties of an Array

var aFunction = function(){
  console.log(arguments);
  var args = Array.prototype.slice.call(arguments,0);
  var args2 = [].slice.call(arguments,0);
  console.log(args);
  console.log(args2);
}
aFunction(1,3,5,7,9);

// Output
// {"0":1,"1":3,"2":5,"3":7,"4":9} 
// [1,3,5,7,9] 
//[1,3,5,7,9] 
//
//
//Spread operator  - creates an array
//if spread operators are part of function arguments they are called Rest arguments - (1,2,4, ...n)
