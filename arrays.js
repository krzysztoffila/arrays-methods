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

/* forEach(): This method executes a provided function once for each array element. It doesn't return anything, it just executes the callback function on each element of the array */
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function (item) {
    console.log(item);
}); // Output: apple, banana, cherry;

/* shift(): This method removes the first element of an array and returns that removed element. This metgod changes the length of the array. */
let fruitsAll = ['apple', 'banana', 'cherry'];
let shiftFruit = fruits.shift();
console.log(shiftFruit); // Output: 'apple'
console.log(fruitsAll); // Output: ['banana', 'cherry];

/* copyWithin(): This method shallow copies part of an array to another location in the same array and returns the modified array withoud modifying its length.Syntax.copyWithin(target, start, end) */
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(2, 0, 2);
console.log(numbers); // Output: [1, 2, 1, 2, 5];

/* push(): This method adds one or more elements to the end of an arrat and returns the new length of the array. */
let moreFruits = ['apple', 'banana'];
moreFruits.push('cherry', 'orange');
console.log(moreFruits); // Output: ['apple', 'banana', 'cherry', 'orange'];

/* unshift(): This method adds one or more elements to the beginning of an array and returns the new length of the array. */
let againFruits = ['cherry', 'orange'];
againFruits.unshift('apple', 'banana');
console.log(againFruits) // Output: ['apple', 'banana', 'cherry', 'orange'];

/* concat(): This method is used to merge two or more arratys. This metghod does not change the existing arrays, but instead returns a new array. */
let andAgainFruits = ['apple', 'banana'];
let andMoreFruits = ['cherry', 'orange'];
let allOfThem = andAgainFruits.concat(andMoreFruits);
console.log(allOfThem); // Output: ['apple', 'banana', 'cherry', 'orange'];

/* splice(): This method changes the contents of an array by removing or replacimg existing elements and/or adding new elements in place. */
const fruitsToSplice = ['apple', 'banana', 'cherry', 'orange'];
//Syntax : arr.splice(start, deleteCount, item1, ..., itemN)
fruitsToSplice.splice(2, 1, 'mango', 'kiwi');
console.log(fruitsToSplice); // // Output: ['apple', 'banana', 'mango', 'kiwi', 'cherry', 'orange'];

/* flat(): This method creates an new array with all sub-array elements concatenated into it recursively up the specified depth. */
const numbersNoFlat = [1, [2, [3]], 4];
const flatNumbers = numbersNoFlat.flat(Infinity);
console.log(flatNumbers); // Output: [1, 2, 3, 4];

/* lastIndexOf(): This method returns the last index at which a given element can be found in the array. */
const numbersToSearch = [1, 2, 3, 4, 5, 3];
const lastIndex = numbers.lastIndexOf(3);
console.log(lastIndex); // Output: 5;

/* indexOf(): This method returns the index of the occurrence of a specified element in an array. If the elements is not present, it returns -1. */
const moreNumbers = [5, 10, 15, 20];
const index = moreNumbers.indexOf(10);
console.log(index); // Output: 1;

/* of(): this method creates a new array instance with a variable number of arguments, reagardless of number or type the arguments. */
const mixArr = Array.of(1, 2, 3, "four", true);
console.log(mixArr); // Output: [1, 2, 3, "four", true];

/* every(): This method checks if all elements in an array pass a test(provided as a function). It return true if all elements pass the test; otherwise, it returns false */
const evenArr = [2, 4, 6, 8];
const isEven = (num) => num % 2 === 0;
const result = evenArr.every(isEven);
console.log(result); // Output: true;

/* slice(): This method returns a shallow copy of a portion of an array into a new array object selected from begin to end(end not included). */
const arrToSliced = [1, 2, 3, 4, 5];
const slicedArr = arrToSliced.slice(2, 4);
console.log(slicedArr); // Output: [3, 4];

/* flatMap(): This method maps each element using a mapping function, then flattens the result into a new array. */
const arrToFlat = [1, 2, 3];
const resultFlat = arrToFlat.flatMap(x => [x * 2]);
console.log(resultFlat); // Output [2, 4, 6];

/* findIndex(): This metgod returns the index of the firs element in an array that passes a test(provided as a funstion). If no element pases the test , it returns -1. */
const highArr = [10, 20, 30, 40, 50];
const greaterThan30 = (num) => num > 30;
const giveMeTheIndex = arr.findIndex(greaterThan30);
console.log(giveMeTheIndex); // Output: 3;

/* find(): This method returns the value of the first element in an array that passes a test(provided as a function). If no element passes the test, it returns undefined */
const againHighArr = [10, 20, 30, 40, 50];
const showResult = arr.find(greaterThan30);
console.log(showResult); // Output: 40;

/* includes(): This method determines whether an array includes a certaind value among its entires, returning true or false as appropriate. */
const someNumbers = [10, 20, 30, 40, 50];
const has20 = someNumbers.includes(20);
console.log(has20); // Output: true;

/* entries(): This method returns a new Array Iterator object that contains the key/value pairs for each index in the array. */
const letters = ["a", "b", "c"];
const iteratorEntries = arr.entries();
console.log(iteratorEntries.next().value); // Output: [0, "a"];
console.log(iteratorEntries.next().value); // Output: [1, "b"];
console.log(iteratorEntries.next().value); // Output: [2, "c"];

/* reduce(): this metgod applies a function to each element of an array and reduces the array to a single value. */
const denominations = [10, 20, 10, 20, 5, 5, 5, 5, 10, 10];
// accumulator: It is the value returned from previous iteration of the function.
// curretnValue: It is the current element being processed in the array.
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum) // Output: 100;

/* isArray(): This method deterines whether the passed value is an array or not. */
const number = 123;
console.log(Array.isArray(number)) // Output: false;

/* filter(): This method creates a new array with all elements that pass the test implemented by the provided function. */
const moneyArr = [10, 20, 20, 50, 100, 200];
const filteredMoney = moneyArr.filter(number => {
    return number > 20;
}); // Output: [50, 100, 200];

/* keys(): This method returns an array containing the kesy of the given object. */
const myObj = {
    a: 1,
    b: 2,
    c: 3,
}
const keysArray = Object.keys(myObj);
console.log(keysArray); // Output ["a", "b", "c"];

/* map(): This method creates a new array with the results of callung a provided function on every element in the callung array. */
const numbersToDo = [1, 2, 3, 4, 5];
const squaredNumbers = numbersToDo.map((number) => {
    return number * number
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25];  