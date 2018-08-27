const Stack = require("./Stack");

const reverseString = inputString => {
  const characters = inputString.slice().split("");
  const stack = new Stack();
  let reversedString = "";

  characters.forEach(character => {
    stack.push(character);
  });

  characters.forEach(() => {
    reversedString += stack.pop();
  });
  return reversedString;
};

module.exports = reverseString;
