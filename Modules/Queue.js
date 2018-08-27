// Create a queue using 2 stacks
const Stack = require("./Stack");

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    do {
      this.stack2.push(this.stack1.pop());
    } while (!this.stack1.isEmpty());

    const output = this.stack2.pop();

    do {
      this.stack1.push(this.stack2.pop());
    } while (!this.stack2.isEmpty());

    return output
  }

  isEmpty() {
    if (this.stack1.size() === 0) {
      return true;
    }
    return false;
  }

  size() {
    return this.stack1.size();
  }
}

module.exports = Queue;
