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
