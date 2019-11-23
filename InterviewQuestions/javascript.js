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

// Question 9 

// Reduce how it works
var _ = {};
_.reduce = (arr, cb, initVal) => {
    var acc;
    if(Array.isArray(arr)){
      acc = initVal || 0;
      for(let i=0; i<arr.length; i++){
         acc = cb(acc, arr[i], i);
       }
    } else {
      acc = initVal || {};
      const keys = Object.keys(arr);
      keys.forEach((key) => {
        acc = cb(acc, arr[key], key);
      })
    }
    return acc;
  }
  
  var reducedVal = _.reduce([1,2,3], (acc, currVal) => {
    return acc + currVal;
  }, 2);
  
  
  var reducedObj = _.reduce({"Gary": "Minessota", "Marc": "Minessota", "Ann": "LA"} , (acc, currVal, key) => {
    (acc[currVal] || (acc[currVal] = [])).push(key);
    return acc;
  }, {});
  
  console.log(reducedVal);
  console.log(reducedObj);
  
  // application of reduce to find out room with all false
  const myData = [
      {
          rooms: [
              {kitchen: false},
              {bathroom: false},
              {conservatory: true},
              {dinningRoom: true},
              {playRoom: false},
              {library: true}
          ]
      },
      {
          rooms: [
              {kitchen: true},
              {bathroom: false},
              {conservatory: false},
              {dinningRoom: false},
              {playRoom: true},
              {library: false}
          ]
      },
      {
          rooms: [
              {kitchen: false},
              {bathroom: false},
              {conservatory: true},
              {dinningRoom: false},
              {playRoom: true},
              {library: false}
          ]
      },
      {
          rooms: [
              {kitchen: true},
              {bathroom: false},
              {conservatory: false},
              {dinningRoom: true},
              {playRoom: false},
              {library: false}
          ]
      }
  ];
  
  const roomsSurvey = _.reduce(myData,(topAcc, data) => {
     const roomvalues = _.reduce(data.rooms, (acc, currValue) => {
        const keys = Object.keys(currValue);
        (acc[keys[0]] || (acc[keys[0]] = [])).push(currValue[keys[0]]);
        return acc;
      }, {});
      Object.keys(roomvalues).forEach(room => (topAcc[room] || (topAcc[room] = [])).push(roomvalues[room][0]));
      return topAcc;
   }, {});
  
  const noOneRoom = Object.keys(roomsSurvey).filter(room => !roomsSurvey[room].some(value => value));
  console.log(noOneRoom); // ["bathroom"] 
  
  
  const multiplyInputs = (input) => input.reduce((inputPiece, acc) => inputPiece * acc, 1)
  console.log(multiplyInputs([4,2,4])) // 32
  
  const concatStrings = (input) => input.reduce((inputPiece, acc) => inputPiece + acc, '')
  console.log(concatStrings(['x','y','z'])) // xyz

// largest common substring
const largestpre = (arr) => {
  const sortedArray = arr.sort();
  const first = sortedArray[0];
  const last = sortedArray[arr.length - 1];
  const firstLength = first.length;
  let i=0;
  
  while(last.includes(first.substring(0, i+1)) && i < firstLength){
    i++;
  }
  return first.substring(0, i);
}


console.log(biggestPre(['hiiiiiiiyaaa','hia','hippe']));
