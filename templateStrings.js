// Template strings to built templates in angular 2 or react
// 
let name = "karthika\nHariharan";
let name1 = 'karthika';
let name2 = `karthika`;
let name3 = `karthika

Hariharan`;

console.log(name);
console.log(name1);
console.log(name2);
console.log(name3);

// karthika
// Hariharan 
// karthika 
// karthika 
// karthika

// Hariharan


// can do interpolation with backticks
//No need to use val.toString() function, `` will auto convert to string

var sumFunc = (a, b) => {
  return `Sum of ${a} and ${b} is ${a + b}`
}
console.log(sumFunc(567, 987));

// cool functions

var myName = 'Karthika Hariharan';
console.log(myName.startsWith('Kar'));
//true
console.log(myName.startsWith('kar'));
//false
console.log(myName.includes(' '));
//true
console.log(myName.includes(' H'));
//true
console.log(myName.endsWith('an'));
//true
console.log(myName.repeat(3));
//console.log(myName.includes(' '));
            

var rawString= String.raw`Not a newline:\n`;
console.log(rawString);
//Not a newline:\n

// Some cool things
//tagged string templates

var innovativeFunc = (strElem, ...val) => {
  console.log(strElem);
  console.log(val);
};

innovativeFunc`Sum of ${a} and ${b} is ${a + b}`;
  

