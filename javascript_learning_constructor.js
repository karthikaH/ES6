
//constructor in javascript
//Constructor starts with a capital letter
let Car = function(color, brand){

  this.color = color;
  this.brand = brand;
}

let redFord = new Car('Red', 'Ford')
console.log(redFord.brand)
//Ford

let withoutNewRedFord = Car('Red', 'Ford');
console.log(withoutNewRedFord)
//undefined
//this is undefined as new keyword is not used and
//hence as nothing is being returned by the function
//output will be undefined
//"this" will here reference the window Object
//
console.log(window.color +"," + window.brand)
//Red,Ford
