/** Class representing a Stack. */

class Stack {
  // _
  constructor() {
    this._dataStorage = {};
    this._length = 0;
  }
  
  /*
  * Returns the length of the stack
  */
  getLength() {
   return this._length;
  }

  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
    try{
      if (!value) {
        throw "Parameter is not defined";
      }
      this._dataStorage[this._length] = value;
      this._length++;
    }
    catch(err){
      console.err(err);
    }
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    try{
      if (!this._length) {
        throw "The Stack is empty";
      }
      var lastVal = this._dataStorage[this._length - 1];
      this._dataStorage[this._length - 1] = undefined; // can use delete keyword
      this._length--;
      return lastVal;
    }
    catch(err){
      console.log(err);
    }
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    try{
      if (!this._length) {
        throw "The Stack is empty";
      }
      return this._dataStorage[this._length - 1];
    }
    catch(err){
      console.log(err);
    }
  }
}

const myStack = new Stack();


// using stack
myStack.push(() => {
  return 'I am a function written by karthi';
});
myStack.push('hi');
myStack.push('I am karthi');

console.log(myStack.getLength());

console.log(myStack)
