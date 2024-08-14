const bubbleSortDescending = require('../bubbleSort')

test('sorts array of numbers in descending order', () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1]
    const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1]
    expect(bubbleSortDescending(input)).toEqual(expectedOutput)
})

test('sorts array with negative numbers in descending order', () => {
    const input = [-1, -3, 2, 0, 4, -2]
    const expectedOutput = [4, 2, 0, -1, -2, -3]
    expect(bubbleSortDescending(input)).toEqual(expectedOutput)
})

test('sorts array with duplicate numbers in descending order', () => {
    const input = [7, 7, 2, 5, 5, 3]
    const expectedOutput = [7, 7, 5, 5, 3, 2]
    expect(bubbleSortDescending(input)).toEqual(expectedOutput)
})

test('sorts already sorted array in descending order', () => {
    const input = [5, 4, 3, 2, 1]
    const expectedOutput = [5, 4, 3, 2, 1]
    expect(bubbleSortDescending(input)).toEqual(expectedOutput)
})

test('sorts array with one element', () => {
    const input = [1]
    const expectedOutput = [1]
    expect(bubbleSortDescending(input)).toEqual(expectedOutput)
})

test('sorts empty array', () => {
    const input = []
    const expectedOutput = []
    expect(bubbleSortDescending(input)).toEqual(expectedOutput)
})