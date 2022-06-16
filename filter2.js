let misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here
// we want to grab the numbers and arrays
// filter is checking each index against the function provided and wants the result of said function to be true or false
const notStrings = misc.filter((index) => {
    console.log(typeof (index))
    console.log(typeof (index) != "string")
    return (typeof (index) != "string")
}) 
console.log(notStrings)