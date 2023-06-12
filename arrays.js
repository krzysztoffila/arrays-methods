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