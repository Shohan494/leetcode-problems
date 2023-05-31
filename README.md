# leetcode-problems

## 1. twoSum
- Hash Map/Hash Table
- So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter
- my solution is based on two nested for loop and I have to use **hash map here for better solution**

## 1480. Running Sum of 1d Array
- https://leetcode.com/problems/running-sum-of-1d-array/editorial/
- I used as usual brute force
- better solution 
```
class Solution {
public int[] runningSum(int[] nums) {
        for (int i = 1; i < nums.length; i++) {
            // Result at index `i` is sum of result at `i-1` and element at `i`.
            nums[i] += nums[i - 1];
        }
        return nums;
    }
}
```
#### Algorithm
    - Define an array result.
    - Initialize the first element of result with the first element of the input array.
    - At index i append the sum of the element nums[i] and previous running sum result[i - 1] to the result array.
    - We repeat step 3 for all indices from 1 to n-1.

#### Complexity Analysis
- Time complexity: O(n)O(n)O(n) where nnn is the length of input array.
- Space complexity: O(1)O(1)O(1) since we don't use any additional space to find the running sum. Note that we do not take into consideration the space occupied by the output array.

#### Personal Note : Video explains better, basically the sum is just the (last sum + current array element)

