/**
 * 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
 * Input            : [1, 2, 4, 3, 5, 3, 2, 1]			
 * Expected Output  : [5, 4, 3, 3, 2, 2, 1, 1]
 */

/**
 * this function uses the Bubble Sort Algorithm
 * @param {*} arr 
 * @returns []
 */
function bubbleSortDescending(arr) {
    let n = arr.length
    // iterate as many times as the length of the array
    for (let i = 0; i < n - 1; i++) {
        // iterates from the first element to the previous element that has been sorted
        for (let j = 0; j < n - 1 - i; j++) {
            // if the current element is smaller than the next element, swap their positions
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

module.exports = bubbleSortDescending

const input = [1, 2, 4, 3, 5, 3, 2, 1]
const sortedArray = bubbleSortDescending(input)
console.log(sortedArray);  // Output: [5, 4, 3, 3, 2, 2, 1, 1]