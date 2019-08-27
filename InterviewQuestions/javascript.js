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
