const maxSumSubarray = require('../slidingWindow')

test('finds maximum sum of subarray with length 2', () => {
    const input = [100, 200, 300, 400]
    const k = 2
    const expectedOutput = 700 // 300 + 400
    expect(maxSumSubarray(input, k)).toBe(expectedOutput)
})

test('finds maximum sum of subarray with length 4', () => {
    const input = [1, 4, 2, 10, 23, 3, 1, 0, 20]
    const k = 4
    const expectedOutput = 39 // 4 + 2 + 10 + 23
    expect(maxSumSubarray(input, k)).toBe(expectedOutput)
})

test('finds maximum sum of subarray with length 2 with negative numbers', () => {
    const input = [-3, 4, 0, -2, 6, -1]
    const k = 2
    const expectedOutput = 5 // 6 + (-1)
    expect(maxSumSubarray(input, k)).toBe(expectedOutput)
})

test('throws error if k is greater than array length', () => {
    const input = [1, 2, 3]
    const k = 5
    expect(() => maxSumSubarray(input, k)).toThrow("array length must be greater than or equal to the subarray length.")
})

test('works with a subarray length equal to array length', () => {
    const input = [10, 20, 30]
    const k = 3
    const expectedOutput = 60 // 10 + 20 + 30
    expect(maxSumSubarray(input, k)).toBe(expectedOutput)
})

test('works with array of one element and subarray length one', () => {
    const input = [42]
    const k = 1
    const expectedOutput = 42 // Only one element
    expect(maxSumSubarray(input, k)).toBe(expectedOutput)
})
