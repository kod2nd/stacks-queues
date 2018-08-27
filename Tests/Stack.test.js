const Stack = require("../Modules/Stack");

test("testStack should be empty upon initilisation", () => {
  const testStack = new Stack();
  expect(testStack.isEmpty()).toBe(true);
  expect(testStack.size()).toEqual(0);
});

test("test should add an item when push is called", () => {
  const testStack = new Stack();
  testStack.push("hello");
  expect(testStack.isEmpty()).toBe(false);
  expect(testStack.size()).toEqual(1);
  expect(testStack.pop()).toBe("hello");
});

test("Stack should follow LIFO", () => {
  //Setup
  const testStack = new Stack();
  testStack.push("hello");
  testStack.push("bye");
  expect(testStack.size()).toEqual(2);
  expect(testStack.pop()).toBe("bye");
  expect(testStack.pop()).toBe("hello");
});
