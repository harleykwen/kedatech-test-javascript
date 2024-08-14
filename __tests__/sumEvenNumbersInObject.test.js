const sumEvenNumbersInObject = require('../evenNumNestedObj')

test('sum of even numbers in nested object 1', () => {
    const input = {
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
                superInner: 2,
                notANumber: true,
                alsoNotANumber: "yup"
            }
        }
    }
    expect(sumEvenNumbersInObject(input)).toBe(6)
})

test('sum of even numbers in nested object 2', () => {
    const input = {
        a: 2,
        b: {b: 2, bb: {b: 3, bb: {b: 2}}},
        c: {c: {c: 2}, cc: 'ball', ccc: 5},
        d: 1,
        e: {e: {e: 4}, ee: 'car'}
    }
    expect(sumEvenNumbersInObject(input)).toBe(12)
})

test('sum of even numbers in an object with no even numbers', () => {
    const input = {
        a: 1,
        b: {b: 3, bb: {b: 5}},
        c: {c: {c: 7}, cc: 'ball', ccc: 5},
        d: 1,
        e: {e: {e: 1}, ee: 'car'}
    }
    expect(sumEvenNumbersInObject(input)).toBe(0)
})

test('sum of even numbers in an object with no numbers', () => {
    const input = {
        a: 'string',
        b: {b: {bb: {cc: {dd: 'string'}}}},
        c: {cc: 'string'},
        d: {e: {ee: 'string'}}
    }
    expect(sumEvenNumbersInObject(input)).toBe(0)
})
