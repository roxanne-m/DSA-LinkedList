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

    // while currNode not null (currNode not first) and currNode.value not item
    while (currNode !== null && currNode.value !== item) {
      // save the previous node
      previousNode = currNode;
      currNode = this.head;
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
