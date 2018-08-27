const reverseString = require('../Modules/reverseString')

test('Should reverse a string when a string is passed into it', () => {
    expect(reverseString("hello")).toBe("olleh")
});