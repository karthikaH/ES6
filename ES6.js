
//https://es6console.com/jkf9xab1/
//https://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/


// Question 1
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(anotherPoint){
    return {
      "x": this.x + anotherPoint.x, "y": this.y + anotherPoint.y
    }
  }
}

console.log(new Point(1, 2).plus(new Point(1, 2)))
 // ANS: {"x":2, "y":4}


// Question 2
function Speaker(name, verb) {
  this.name = name
  this.verb = verb || "says"
}
Speaker.prototype.speak = function(text) {
  console.log(this.name + " " + this.verb + " '" + text + "'")
}

function Shouter(name) {
  Speaker.call(this, name, "shouts")
}
Shouter.prototype = Object.create(Speaker.prototype)
Shouter.prototype.speak = function(text) {
  Speaker.prototype.speak.call(this, text.toUpperCase())
}

new Shouter("Dr. Loudmouth").speak("hello there")


//ANS:
class Speaker{

  constructor(name, verb){
    this.name = name;
    this.verb = verb || "says";
  }

  speak(text){
    return this.name + " " + this.verb + " '" + text + "'"
  }

}

class Shouter extends Speaker {
  constructor(name) {
    super(name,"shouts"); // call the super class constructor and pass in the name parameter
  }

   speak(text){
    return this.name + " " + this.verb + " '" + text.toUpperCase() + "'"
  }

}

console.log(new Speaker("karthika", "speaks").speak("Tamil"))
console.log(new Shouter("karthika").speak("Tamil"))
console.log(new Shouter("Dr. Loudmouth").speak("hello there"))

//output:
//karthika speaks 'Tamil'
//karthika shouts 'TAMIL'
//Dr. Loudmouth shouts 'HELLO THERE'

//another way of answering

class Shouter extends Speaker {
  constructor(name) {
    super(name, "shouts")
  }
  speak(text) {
    super.speak(text.toUpperCase()) // this is where the change is
  }
}

//Question 3 another way - using getters

class Speaker {
  constructor(name, verb) {
    this.name = name
    this.verb = verb || "says"
  }
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'")
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name)
  }
  get verb() {
    return "speaks";
  }
  speak(text) {
    super.speak(text.toUpperCase())
  }
}

new Shouter("Dr. Loudmouth").speak("hello there")
new Speaker("Dr. Loudmouth", "tells").speak("hello there")

//output
Dr. Loudmouth speaks 'HELLO THERE'
Dr. Loudmouth tells 'hello there'
