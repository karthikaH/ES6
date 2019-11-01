/** Class representing a Linked List */


      class Node {
        constructor(value) {
          this.value = value;
          this.next = null;
        }
      }
      
      class LinkedList {
      
        constructor(value) {
          this.head = new Node(value);
          this.tail = this.head; //pass by reference
        }

        /*
        * Inserts a new value to the end of the linked list
        * @param {*} value - the value to insert
        */
        insert(value) {
          const next = new Node(value);
          this.tail.next = next; // here by reference plays a key role
          this.tail = next;
        }

        /*
        * Deletes a node
        * @param {*} node - the node to remove
        * @return {*} value - the deleted node's value
        */
        remove(node) {
          try{
            if(this.head){
              let currentNode = this.head;
              if(currentNode !== node) { // when node is not head
                while(JSON.stringify(currentNode.next) !== JSON.stringify(node)){
                  currentNode = currentNode.next;
                }
                currentNode.next = node.next;
                if(JSON.stringify(this.tail) === JSON.stringify(node)){
                  this.tail = currentNode;
                }
              } else {
                this.head = this.tail = undefined;
              }
            } else {
              throw "LinkedList is empty. Can't remove any item"
            }
          } 
          catch(err){
            console.log(err);
          }
        }

        /*
        * Removes the value at the end of the linked list
        * @return {*} - the removed value
        */
        removeTail() {
          try{
            if(this.head){
              let currentNode = this.head;
              if(currentNode !== this.tail){
                while(currentNode.next !== this.tail){
                  currentNode = currentNode.next;
                }
                currentNode.next = null;
                this.tail = currentNode;
              } else {
                this.head = this.tail = undefined;
              }
            } else {
              throw "LinkedList is empty. Can't remove any item"
            }
          } 
          catch(err){
            console.log(err);
          }
        }
      
        /*
        * Searches the linked list and returns true if it contains the value passed
        * @param {*} value - the value to search for
        * @return {boolean} - true if value is found, otherwise false
        */
        contains(value) {
          try{
            if(this.head){
              let currentNode = this.head;
              while(currentNode.value !== value){
                currentNode = currentNode.next;
              }
              return currentNode.value !== value
            } else {
              throw "LinkedList is empty. Can't remove any item"
            }
          } 
          catch(err){
            console.log(err);
          }
        }  
        /*
        * Checks if a node is the head of the linked list 
        * @param {{prev:Object|null, next:Object|null}} node - the node to check
        * @return {boolean} - true if node is the head, otherwise false
        */
        isHead(node) {
          return node === this.head;
        }
        /*
        * Checks if a node is the tail of the linked list 
        * @param {{prev:Object|null, next:Object|null}} node - the node to check
        * @return {boolean} - true if node is the tail, otherwise false
        */
        isTail(node) {
          return node === this.tail;
        }
      
        addAtTheBeginning(value) {
          const newList = new Node(value);
          newList.next = this.head;
          this.head = newList;
        }
      
        removeAtTheBeginning(value) {
          const newList = new Node(value);
          newList.next = this.head;
          this.head = newList;
        }
      }
      
      const myList = new LinkedList(1);
      
      myList.insert(2);
      myList.insert(3);
      myList.insert(4);
      myList.removeTail(); 
      const removedOne = new Node(2);
      removedOne.next = new Node(3);
      myList.remove(removedOne);
      console.log(JSON.stringify(myList));
