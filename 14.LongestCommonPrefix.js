/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = "";
    let result = "";
    strs.forEach(function findingCommonPrefix(str){
        common = str[0]
        console.log(common)
        if(result == str[0])
        {
          //console.log(str[0])
          result += str[0]
        }
        else
        {
          result = "";
        }
    })

    console.log(result)
    //return common;
};

longestCommonPrefix(["flower","flow","flight"])
console.log("=================================")
longestCommonPrefix(["dog","racecar","car"])
