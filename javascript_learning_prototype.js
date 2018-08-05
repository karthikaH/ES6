//prototype

//Every constructor has a property called "prototype".
//Constructor starts with a capital leter
let Veggies = function (name, price){
  this.name = name;
  this.price = price;
//we can add a method to constructor like this
  this.getPrice = function(){
    return this.price;
  }
}
let tomato = new Veggies('Tomatoes', 30)

let Vegetables = function (name, price){
  this.name = name;
  this.price = price;
}
//we can add a method to constructor like this
  Vegetables.prototype.getPrice = function(){
    return this.price;
  }
  let pumpkin = new Vegetables('Pumpkin', 50)

console.dir(Veggies);
console.dir(Vegetables);
console.log(tomato);
console.log(pumpkin);

//__proto__ -> is the creator of the object - tomato, pumpkin
//its all about referencing
