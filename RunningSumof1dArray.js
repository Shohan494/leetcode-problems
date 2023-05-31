/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let resultArray = [];
    for(let x = 0; x < nums.length; x++)
    {
      let sumForInside = 0;
        for(let y = 0; y <= x; y++)
        {
            //console.log(nums[y])
            sumForInside += nums[y]
        }
        resultArray.push(sumForInside)
    }
    //console.log(resultArray);
    return resultArray
};

runningSum([1,2,3,4])
