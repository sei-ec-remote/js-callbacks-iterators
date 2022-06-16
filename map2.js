let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array
// Filter the resulting array by numbers larger than 30
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

//Your code here
const square = (num) => {
    for (let i = 1; i < num.length; i++) {
        return Math.pow(numbers[i], 2)
    }
}
//function square = numbers.Math.pow([i], 2)
console.log(square(numbers))