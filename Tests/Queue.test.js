const Queue = require('../Modules/Queue');

test('Should be emtpy and have a size of 0 when instantiated', () => {
    const queue = new Queue()
    expect(queue.isEmpty()).toBe(true)
    expect(queue.size()).toEqual(0)
});

test('Should have size 1 when an item is enqueued', () => {
    const queue = new Queue()
    queue.enqueue(1)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.size()).toEqual(1)
});

test('Should return size 1 when dequeue is called after 2 items have been enqueued', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.isEmpty()).toBe(false)
    expect(queue.dequeue()).toEqual(1)
});

test('queue should be first in first out', () => {
    const queue = new Queue()
    queue.enqueue("a")
    queue.enqueue("b")
    queue.enqueue("c")
    queue.enqueue("d")
    expect(queue.dequeue()).toEqual("a")
    expect(queue.dequeue()).toEqual("b")
    expect(queue.dequeue()).not.toEqual("d")
    expect(queue.dequeue()).toEqual("d")
});