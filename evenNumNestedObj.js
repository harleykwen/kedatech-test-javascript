/**
 * 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
 * 
 * Input :
 * {
 *      outer: 2,
 *      obj: {
 *          inner: 2,
 *          otherObj: {
 *              superInner: 2,
 *              notANumber: true,
 *              alsoNotANumber: "yup"
 *          }
 *      }
 * }
 * Output: 6
 
 * Input:
 * {
 *      a: 2,
 *      b: {b: 2, bb: {b: 3, bb: {b: 2}}},
 *      c: {c: {c: 2}, cc: 'ball', ccc: 5},
 *      d: 1,
 *      e: {e: {e: 4}, ee: 'car'}
 * };
 * Output: 12
 * 
 */

/**
 * this function uses Recursive Approach
 * @param {*} obj 
 * @returns number
 */
function sumEvenNumbersInObject(obj) {
    let sum = 0

    function recurse(value) {
        if (typeof value === 'number') {
            if (value % 2 === 0) {
                sum += value
            }
        } else if (typeof value === 'object' && value !== null) {
            for (const key in value) {
                if (value.hasOwnProperty(key)) {
                    recurse(value[key])
                }
            }
        }
    }

    recurse(obj)
    return sum
}

module.exports = sumEvenNumbersInObject

const input1 = {
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

const input2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
}

console.log(sumEvenNumbersInObject(input1)) // Output: 6
console.log(sumEvenNumbersInObject(input2)) // Output: 12
