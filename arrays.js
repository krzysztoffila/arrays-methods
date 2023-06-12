/* values(): This method returns an iterator that provides the values for each index in the array. It takes no arguments. */
const arr = ['apple', 'banana', 'cherry'];
const iterator = arr.values()

for (const value of iterator) {
    console.log.apply(value);
} // Output: apple banana cherry

/* length(): This property returns th length of array. */
const arrLength = ['apple', 'banana', 'cherry'];
console.log(arrLength.length); // Output: 3

/* reverse(): This method reverses the order of the elements in the array. */
const arrReverse = ['apple', 'banana', 'cherry'];
arrReverse.reverse();
console.log(arrReverse) // Output: ['cherry', 'banana', 'apple'];

/* sort(): This method sorts the elements of an array in place and returns the sorted array. It can take an optional compare function as an argument. */
const arrSorted = ['banana', 'apple', 'cherry'];
arrSorted.sort();
console.log(arrSorted) // Output: ['apple', 'banana', 'cherry'];

/* at(): This metgod returns the element at the specified index in the array. It takes one argument: the index. */
const arrElement = ['banana', 'apple', 'cherry'];
console.log(arrElement.at(1)) // Output: 'apple'

/* fill(): This method fills all the elements of an array from a start index to an end index with a static value. It can take up to three arguments: the value to fill with, the start index, and the end index. */
const arrFill = ['apple', 'banana', 'cherry'];
arrFill.fill('orange', 1, 2);
console.log(arrFill) // Output ['apple', 'orange', 'cherry'];

/* from(): This method creates a new array from an array-like object. It cna take up to two arguments: the object to convert to an array, and a mapping function to apply to each element of the new array. */
const obj = {
    0: 'apple',
    1: 'banana',
    2: 'cherry'
}
const arrFromObj = Array.from(obj);
console.log(arrFromObj); // Output: ['apple', 'banana', 'cherry'];

/* join(): This method joins all the elements of an array into a string using a specified separator. It takes one optional argument: the separator to use. */
const arrToJoined = ['apple', 'banana', 'cherry'];
const arrJoined = arrToJoined.join(' or ');
console.log(arrJoined) // Output: 'apple or banana or cherry';

/* toString(): This method returns a string representing the array and its elements. */
const arrToString = ['apple', 'banana', 'cherry'];
const str = arrToString.toString();
console.log(str) // Output: 'apple,banana,cherry'

/* pop(): This method removes the last element from an arrau and returns that element. */
const arrFull = ['apple', 'banana', 'cherry'];
const last = arrFull.pop();
console.log(last); // Output: 'cherry'
console.log(arrFull); // Output: ['apple', 'banana'];

/* forEach(): Method executes a provided function once for each array element. It doesn't return anything, it just executes the callback function on each element of the array */
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function (item) {
    console.log(item);
}); // Output: apple, banana, cherry;

/* shift(): Method removes the first element of an array and returns that removed element. This metgod changes the length of the array. */
let fruitsAll = ['apple', 'banana', 'cherry'];
let shiftFruit = fruits.shift();
console.log(shiftFruit); // Output: 'apple'
console.log(fruitsAll); // Output: ['banana', 'cherry];

/* copyWithin(): Method shallow copies part of an array to another location in the same array and returns the modified array withoud modifying its length.Syntax.copyWithin(target, start, end) */
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(2, 0, 2);
console.log(numbers); // Output: [1, 2, 1, 2, 5];

/* push(): Method adds one or more elements to the end of an arrat and returns the new length of the array. */
let moreFruits = ['apple', 'banana'];
moreFruits.push('cherry', 'orange');
console.log(moreFruits); // Output: ['apple', 'banana', 'cherry', 'orange'];

/* unshift(): Method adds one or more elements to the beginning of an array and returns the new length of the array. */
let againFruits = ['cherry', 'orange'];
againFruits.unshift('apple', 'banana');
console.log(againFruits) // Output: ['apple', 'banana', 'cherry', 'orange'];