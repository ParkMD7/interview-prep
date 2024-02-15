// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  // method to add something to the end of the queue
  add(el) {
    this.data.unshift(el)
  }

  // method to remove the first element of the queue + return it
  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
