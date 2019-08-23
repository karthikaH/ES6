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
