 /** Class representing a Queue. 
         * @constructor
        */
        
        class Queue {
        
          constructor() {
            this._dataStorage = {};
            this._length = 0;
            this._headIndex = 0;
          }
          /*
          * Enqueues a new value at the end of the queue
          * @param {*} value the value to enqueue
          */
          enqueue(value) {
            try{
             if(!value){
               throw 'Parameter is not defined'
             }
             this._dataStorage[this._headIndex + this._length] = value;
             this._length++;
            }
            catch(err) {
              console.log(err);
            }
          }
        
          /*
          * Dequeues the value from the beginning of the queue and returns it
          * @return {*} the first and oldest value in the queue
          */
          dequeue() {
            try{
              if (!this._length) {
                throw "The Queue is empty";
              }
              var firstVal = this._dataStorage[this._headIndex];
              this._dataStorage[this._headIndex] = undefined; // can use delete keyword
              this._length--;
              this._headIndex++;
              return firstVal;
            }
            catch(err){
              console.log(err);
            }
          }
          /*
          * Returns the value at the beginning of the queue without removing it from the queue
          * @return {*} the first and oldest value in the queue
          */
          peek() {
            try{
              if (!this._length) {
                throw "The Queue is empty";
              }
              return this._dataStorage[this._headIndex];
            }
            catch(err){
              console.log(err);
            }
          }
        }
        
        var myQueue = new Queue();
        myQueue.dequeue();
        myQueue.enqueue('hi');
        myQueue.enqueue('bye');
        myQueue.enqueue('I am back');
        myQueue.enqueue('I am back2');
        myQueue.enqueue('I am back3');
        myQueue.enqueue('bye');
        myQueue.dequeue();
        myQueue.dequeue();
        myQueue.dequeue();
        
        
        console.log(myQueue.peek());
        `
