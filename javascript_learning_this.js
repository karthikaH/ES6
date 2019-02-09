// this keyword in javascript

// if we are inside the house - this house means the house we are inside
// Similarly, if we are inside a specific scope or an Object or a function, then
// this really mwans whichever object you are in

// 'this' inside Global scope

// house

this.table = 'window table';
// since the table is created inside window scope window.table = 'window table'
console.log(window.table);
//window table

// now we create a garage in the house
// An Object
this.garage = {
  table: 'garage table',
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  }
};
console.log(this.garage.table);
console.log(window.garage.table);
// window table

// garage is a public property of windows that can be accessed from outside

// creating a room --- private one
// 'this' inside an object
let karthiRoom = {
  table: 'karthi table',
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  }
}
console.log(this.karthiRoom.table);
// VM86:4 Uncaught TypeError: Cannot read property 'table' of undefined
//     at <anonymous>:4:29
// as it is private
console.log(karthiRoom.table);
// karthi table

// 'this' inside a method
console.log(karthiRoom.cleanTable());
// cleaning karthi table
console.log(this.garage.cleanTable());
// cleaning garage table


// here both clean tables are method of the object

// 'this' inside a function --- function is more like a job
const cleanTable = function() {
  console.log(`cleaning ${this.table}`);
}
cleanTable();
// Since function is not an object, this should not be available inside a function
// function doesnt know what this is
// output: window table, since function is being called in the window scope
// if we use 'use strict'
// output: TypeError: Cannot read property 'table' of undefined

// call to the rescue
cleanTable.call(this);
// This means, execute the function as a method of 'this', this here being the global Object
// Cleaning window tables

// by adding parameter -- say soap for Cleaning
const cleanTableWithSoap = function(soap) {
  console.log(`cleaning ${this.table} using ${soap}`);
}
cleanTableWithSoap.call(this, 'some soap');
// ouput: cleaning window table using some soap
cleanTableWithSoap.call(this.garage, 'some soap');
// ouput: cleaning garage table using some soap
cleanTableWithSoap.call(karthiRoom, 'some soap');
// ouput: cleaning karthi table using some soap

// this is how we use somebody else method on somebody else object using call


// this inside an inner function

// CASE 1
let cleanTableWithInnerFunc = function(soap) {
  let that = this;
   const innerFunc = function( __soap) {
     // this function wont understand what this means
     console.log(`cleaning ${that.table} using ${__soap}`);
   }
   innerFunc(soap);
}

cleanTableWithInnerFunc.call(this, 'some soap');
// ouput: cleaning window table using some soap
cleanTableWithInnerFunc.call(this.garage, 'some soap');
// ouput: cleaning garage table using some soap
cleanTableWithInnerFunc.call(karthiRoom, 'some soap');
// ouput: cleaning karthi table using some soap


// CASE 2
let cleanTableWithInnerFunc = function(soap) {
  // arrow func will automatically take the outer scope's this
   const innerFunc = ( __soap) => {
     // this function wont understand what this means
     console.log(`cleaning ${this.table} using ${__soap}`);
   }
   innerFunc(soap);
}

cleanTableWithInnerFunc.call(this, 'some soap');
// ouput: cleaning window table using some soap
cleanTableWithInnerFunc.call(this.garage, 'some soap');
// ouput: cleaning garage table using some soap
cleanTableWithInnerFunc.call(karthiRoom, 'some soap');
// ouput: cleaning karthi table using some soap

// CASE 3
let cleanTableWithInnerFunc = function(soap) {
   const innerFunc = function( __soap) {
     // this function wont understand what this means
     console.log(`cleaning ${this.table} using ${__soap}`);
   }
   innerFunc.call(this, soap);
}

cleanTableWithInnerFunc.call(this, 'some soap');
// ouput: cleaning window table using some soap
cleanTableWithInnerFunc.call(this.garage, 'some soap');
// ouput: cleaning garage table using some soap
cleanTableWithInnerFunc.call(karthiRoom, 'some soap');
// ouput: cleaning karthi table using some soap

// CASE 4
let cleanTableWithInnerFunc = function(soap) {
   const innerFunc = function( __soap) {
     // this function wont understand what this means
     console.log(`cleaning ${this.table} using ${__soap}`);
   }
   // bind creates a new function by binding this to the func
   innerFunc.bind(this)(soap);
}

cleanTableWithInnerFunc.call(this, 'some soap');
// ouput: cleaning window table using some soap
cleanTableWithInnerFunc.call(this.garage, 'some soap');
// ouput: cleaning garage table using some soap
cleanTableWithInnerFunc.call(karthiRoom, 'some soap');
// ouput: cleaning karthi table using some soap


// say my sister gopi wants a room as well, we need not create seperate Objects
// we can create a constructor and create instances out of it

// 'this' inside Constructor
let createRoom = function(name) {
  //here value is being set -- so we need new keyword
  this.room = `${name}'s room`;
}
const jillsRoom = new createRoom('Jill');
const johnsRoom = new createRoom('John');

console.log(jillsRoom.room);
console.log(johnsRoom.room);
// output: Jill's room
// output: John's room

createRoom.prototype.roomWithTable = function(table){
  console.log(`put ${table} in ${this.room}`);
}

jillsRoom.roomWithTable('dinning table');
// put dinning table in Jill's room
johnsRoom.roomWithTable('study table');
// put study table in John's room


// 'this' inside a class
class CreateRoom {
  // constructor method
  constructor(name) {
    this.room = `${name}'s room`;
  }
  // protype method
  roomWithTable(table){
    console.log(`put ${table} in ${this.room}`);
  }
}

const karthisRoom = new CreateRoom ('karthi');
const gopisRoom = new CreateRoom ('gopi');

karthisRoom.roomWithTable('dinning table');
// put dinning table in karthi's room
gopisRoom.roomWithTable('study table');
// put study table in gopi's room
