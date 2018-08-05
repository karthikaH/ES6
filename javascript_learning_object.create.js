//Object.create makes prototypical inheritance possible
//Object is the master Constructor ---- which is a function
//its in global space
//Object has create function along with other functions
//Object.create(prototypeObject, propertyObject[optional])
//every constructor has a property called prototype which holds bunch of functions

const createObj = Object.create(Object.prototype);
//setting it to Object constructor's prototypeObject

const objectLiteral = {};
const objectWithValue = {"a":1};
//also poiting to Object's prototype - internally done
const noProtoTypeSet = Object.create(null);


console.dir(createObj)
console.dir(objectLiteral)
console.dir(objectWithValue)
console.dir(noProtoTypeSet)


let Vegetables = function (name, price){
  this.name = name;
  this.price = price;
}

Vegetables.prototype.getPrice = function(){
  return this.price;
}

Vegetables.prototype = {
  getName(){
    return this.name;
  }
}

// this sets the initial value
let tomato = new Vegetables("Tomato", 30);
// this is mainly used to extend classes
//that is there will be a base class and sub class will be inheriting
//base classes' methos
let pumpkin = Object.create(Vegetables.prototype);

console.dir(tomato);
console.dir(pumpkin);
let smallPumpkin = function(){

}
let smallPumpkin2 = function(){

}
smallPumpkin.prototype = Object.create(Vegetables.prototype);
smallPumpkin2 = Object.create(Vegetables.prototype);
let redPumpkin = new smallPumpkin();
console.log(pumpkin instanceof Vegetables);
console.log(redPumpkin instanceof Vegetables);
console.log(redPumpkin instanceof smallPumpkin);
console.log(smallPumpkin instanceof Vegetables);
console.log(smallPumpkin instanceof Vegetables); //DOUBT
console.log(smallPumpkin2 instanceof Vegetables); //DOUBT
console.log(smallPumpkin instanceof Object);

console.dir(Vegetables.prototype.isPrototypeOf(smallPumpkin));

//ES6QUESTION: 
class Point {
  constructor(x, y) {
    this.x = x, this.y = y
  }
  add(other) {
    return new Point(this.x + other.x, this.y + other.y)
  }
}

var fakePoint = Object.create(Point.prototype)
console.log(fakePoint instanceof Point) //true
