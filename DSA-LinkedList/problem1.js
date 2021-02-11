// Problem 1: Create a linked list class

/*
Walk through the linked list code in the 
curriculum and understand it well. Then write 
a linked list class and its core functions 
(insertFirst, insertLast, remove, find) from scratch.
*/

// The underscore indicates that the node class is a private class that shouldn't be accessible by anyone else other than the linked list class
class _Node {
  constructor(value, next) {
    //Accepts a value (that holds data), next (serves as a pointer to the next node)
    this.value = value;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    // Head to indicate the beginning of the list. Starting with an empty list, represented by null
    this.head = null;
  }

  // Insert first
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  // Insert last
  insertLast(item) {
    // if head is null (meaning no items in list) set item as first item inserted
    if (this.head === null) {
      this.insertFirst(item);
    }
    //set head to tempNode
    else {
      let tempNode = this.head;
      // While next item is not null
      while (tempNode.next !== null) {
        // set next to tempNode
        tempNode = tempNode.next;
      }
      // once find next item that IS equal to null, set create new node and set to null (meaning last in list)
      tempNode.next = new _Node(item, null);
    }
  }

  // Insert Before
  /* Inserts a new node before a node containing the key.*/
  insertBefore(key, itemToInsert) {
    // if head is null (no items in list)
    if (this.head === null) {
      return;
    }
    // if head value equal to key (key is first item in list), call insert first method
    if (this.head.value === key) {
      this.insertFirst(itemToInsert);
      return;
    }

    let prevNode = null;
    let currNode = this.head;
    //move prevNode & currNode to following one each time
    while (currNode !== null && currNode.value !== key) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    // if currNode is null (end of list), then did not find the node to start with
    if (currNode === null) {
      console.log('Node not found to insert');
      return;
    }
    //insert between current and previous
    prevNode.next = new _Node(itemToInsert, currNode);
  }

  // Insert After function
  insertAfter(key, itemToInsert) {
    let tempNode = this.head;
    // if head is null (no items in list)
    if (tempNode === null) {
      return;
    }

    // while tempnode is not null & tempnode value not equal to key
    while (tempNode !== null && tempNode.value !== key) {
      // set tempnode to tempnode.next (move to next item and set)
      tempNode = tempNode.next;
    }

    // when tempNode.value is equal to key and tempNode not null,
    if (tempNode !== null) {
      // call function _Node to create a new node
      tempNode.next = new _Node(itemToInsert, tempNode.next);
    }
  }


  // Insert at
  insertAt(position, itemToInsert){

    // Throw error if position entered is less than zero.
    if(position < 0){
        throw new Error('Position error, position is less than 0.');
    }

    // if position is 0, then call insertFirst method (itemToInsert will be place at start of list)
    if(position === 0){
        this.insertFirst(itemToInsert);
    }
    // Find position
    else{
        
    }
  }

  // Remove function
  remove(item) {
    // if list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    // while currNode not null (currNode not last) and currNode.value not item
    while (currNode !== null && currNode.value !== item) {
      // save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  // Find function
  find(item) {
    // Start at the head
    let currNode = this.head;

    //if list is empty
    if (!this.head) {
      return null;
    }

    // check for item
    while (currNode.value !== item) {
      // return null if it's the end of list & the item is not on list
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }

    // Found item
    return currNode;
  }
}

/* Problem 2: Create a singly linked list   */

/*
Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
Add Tauhida to the list.
Remove squirrel from the list.
Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
Implement a function called insertAt() that inserts an item at a specific position in the linked list.
Add Athena before Boomer using your insertBefore() function.
Add Hotdog after Helo using the insertAfter() method.
Using the insertAt() method insert Kat in the 3rd position of the list.
Remove Tauhida from the list.
*/

function displayList(list) {
  let currNode = list.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function main() {
  // Create a linked list w/name SLL
  let SLL = new linkedList();

  // Add to list: Apollo, Boomer, Helo, Husker, Starbuck
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  // Add Tauhida to the list.
  SLL.insertLast('Tauhida');

  // Remove squirrel from the list.
  SLL.remove('Squirrel');

  SLL.insertBefore('Boomer', 'Athena');

  SLL.insertAfter('Helo', 'Hotdog');

  displayList(SLL);
}

main();
