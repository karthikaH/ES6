// Question 1

var x = 0;

function printX() {
    x = 10;
    x = x + 'b';

    function x() {
        return {name: 'Teacher', lesson: 'Javacsript'}
    }
    return x;
}

var y = printX();
console.log(y);

// Question 2

const cb = function () {
    return 2 + '4';
}

const multiplyCb = function (a, b) {
    return (a + b) * cb();
}

const multipliedCbValue = multiplyCb(2, 4);
console.log(multipliedCbValue);

// Question 3

const numArr = [2, 4, 6, 8, 10];
numArr.splice(0, 0, [-2, 0]);

const newNumArr = numArr.join('.');
console.log(newNumArr);

// Question 4
// A function to get the count of different words in a sentence
const sentence = "hi hello Good Morning bye bye bye hello";

// Solution
const words = sentence.split(' ');
const countDict = words.reduce((acc, word) => {
  acc[word] = words.filter(v  => v === word).length;
  return acc;
}, {})

console.log(countDict);
// {"hi":1,"hello":2,"Good":1,"Morning":1,"bye":3}

// Question 5
let newArr = {};
newArr["0"] = "kar";
let zero = "0";
newArr.zero = "0";
console.log(newArr[zero]); //kar
console.log(newArr.zero); // 0

// Question 6
// how to flatten this array
const [a,b,[c,d,[e]]] = [1,2,[3,4,[5]]];                      
console.log([a,b,c,d,e]);  //[1,2,3,4,5] 

// Question 7
const flowers = [
  {
    name: 'Rose',
    color: 'Red',
  },
    {
    name: 'Lily',
    color: 'White',
  },
  ]
// destructure colors white & red

let [{color: first}, {color: second}] = flowers;
console.log(first, second); //Red White

// Question 8

let _ = {
  each(arr, cb) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
      newArr.push(cb(arr[i]));
    }
    return newArr;
  }
}

_.each(['one', 'Two', 'three'], function(val){console.log(val)}) 
// One Two Three
