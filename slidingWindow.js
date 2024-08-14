/**
 * 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
 * 
 * Input            : ([100, 200, 300, 400], 2)				
 * Expected Output  : 700   // didapatkan dari 300 + 400
 *
 * Input            : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		
 * Expected Output  : 39    // didapatkan dari 4 + 2 + 10 + 23
 * 
 * Input            : ([-3, 4, 0, -2, 6, -1], 2)				
 * Expected Output  : 5     // didapatkan dari 6 + -1
 */

/**
 * this function uses Sliding Window Approach
 * @param {*} arr 
 * @param {*} k 
 * @returns number
 */
function maxSumSubarray(arr, k) {
    if (arr.length < k) {
        throw new Error("array length must be greater than or equal to the subarray length.");
    }

    // variable to store the maximum amount
    let maxSum = 0
    // variable to store the current count of the subarray
    let windowSum = 0

    // calculate the initial sum of the first subarray
    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }

    // initialize maxSum with an initial sum
    maxSum = windowSum

    // slide the window to the right
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum
}

module.exports = maxSumSubarray

console.log(maxSumSubarray([100, 200, 300, 400], 2)) // Output: 700
console.log(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // Output: 39
console.log(maxSumSubarray([-3, 4, 0, -2, 6, -1], 2)) // Output: 5