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