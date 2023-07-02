/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let status = false
    for(let x = 0; x < nums.length; x++)
    {
        for(let y = x + 1; y < nums.length; y++)
        {
            if(nums[x] == nums[y])
            {
                status = true
                break
            }
        }
    }

    return status
};
