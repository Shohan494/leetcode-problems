/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let x = 0; x < nums.length; x++)
    {
        for(let y = x + 1; y < nums.length; y++)
        {
          //console.log([nums[x], nums[y]])
          if(nums[x] + nums[y] == target)
          {
              //console.log([x, y])
              return [x, y]
          }
        }

    }
};
