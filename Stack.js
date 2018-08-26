class Stack {
  constructor() {
    this.data = [];
  }

  // Push .push(item) adds to the last element of the data
  push(item) {
    this.data = [...this.data, item];
  }

  // Pop .pop() removes the last element of the data
  pop() {
    const elementToPop = this.data[this.size()-1]
    this.data = this.data.slice(0, this.size() - 1);
    return elementToPop 
  }

  size() {
    return this.data.length;
  }

  // isEmpty()
  isEmpty() {
    if (this.data.length === 0) {
      return true;
    }
    return false;
  }

}

module.exports = Stack;
