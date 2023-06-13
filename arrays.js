/* values(): Ta metoda zwraca iterator, który dostarcza wartości dla każdego indeksu w tablicy. Nie przyjmuje żadnych argumentów. */
const arr = ['apple', 'banana', 'cherry'];
const iterator = arr.values()

for (const value of iterator) {
    console.log.apply(value);
} // Output: apple banana cherry

/* length(): Ta właściwość zwraca długość tablicy. */
const arrLength = ['apple', 'banana', 'cherry'];
console.log(arrLength.length); // Output: 3

/* reverse(): Ta metoda odwraca kolejność elementów w tablicy. */
const arrReverse = ['apple', 'banana', 'cherry'];
arrReverse.reverse();
console.log(arrReverse) // Output: ['cherry', 'banana', 'apple'];

/* sort(): Ta metoda sortuje elementy tablicy w miejscu i zwraca posortowaną tablicę. Jako argument może przyjąć opcjonalną funkcję porównania. */
const arrSorted = ['banana', 'apple', 'cherry'];
arrSorted.sort();
console.log(arrSorted) // Output: ['apple', 'banana', 'cherry'];

/* at(): Ta metoda zwraca element na podanym indeksie w tablicy. Przyjmuje jeden argument: indeks. */
const arrElement = ['banana', 'apple', 'cherry'];
console.log(arrElement.at(1)) // Output: 'apple'

/* fill(): Ta metoda wypełnia wszystkie elementy tablicy od indeksu początkowego do indeksu końcowego wartością statyczną. Może przyjmować do trzech argumentów: wartość do wypełnienia, indeks początkowy i indeks końcowy. */
const arrFill = ['apple', 'banana', 'cherry'];
arrFill.fill('orange', 1, 2);
console.log(arrFill) // Output ['apple', 'orange', 'cherry'];

/* from(): Ta metoda tworzy nową tablicę z obiektu podobnego do tablicy. Może przyjmować do dwóch argumentów: obiekt do konwersji na tablicę i funkcję mapowania do zastosowania do każdego elementu nowej tablicy. */
const obj = {
    0: 'apple',
    1: 'banana',
    2: 'cherry'
}
const arrFromObj = Array.from(obj);
console.log(arrFromObj); // Output: ['apple', 'banana', 'cherry'];

/* join(): Ta metoda łączy wszystkie elementy tablicy w ciąg znaków przy użyciu określonego separatora. Przyjmuje jeden opcjonalny argument: separator do użycia. */
const arrToJoined = ['apple', 'banana', 'cherry'];
const arrJoined = arrToJoined.join(' or ');
console.log(arrJoined) // Output: 'apple or banana or cherry';

/* toString(): Ta metoda zwraca ciąg znaków reprezentujący tablicę i jej elementy. */
const arrToString = ['apple', 'banana', 'cherry'];
const str = arrToString.toString();
console.log(str) // Output: 'apple,banana,cherry'

/* pop(): Ta metoda usuwa ostatni element z tablicy i zwraca ten element. */
const arrFull = ['apple', 'banana', 'cherry'];
const last = arrFull.pop();
console.log(last); // Output: 'cherry'
console.log(arrFull); // Output: ['apple', 'banana'];

/* forEach(): Ta metoda wykonuje dostarczoną funkcję raz dla każdego elementu tablicy. Nic nie zwraca, po prostu wykonuje funkcję zwrotną na każdym elemencie tablicy */
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function (item) {
    console.log(item);
}); // Output: apple, banana, cherry;

/* shift(): Metoda ta usuwa pierwszy element tablicy i zwraca usunięty element. Metoda ta zmienia długość tablicy. */
let fruitsAll = ['apple', 'banana', 'cherry'];
let shiftFruit = fruits.shift();
console.log(shiftFruit); // Output: 'apple'
console.log(fruitsAll); // Output: ['banana', 'cherry];

/* copyWithin(): Ta metoda płytko kopiuje część tablicy do innego miejsca w tej samej tablicy i zwraca zmodyfikowaną tablicę bez modyfikowania jej długości.Składnia.copyWithin(target, start, end) */
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(2, 0, 2);
console.log(numbers); // Output: [1, 2, 1, 2, 5];

/* push(): Ta metoda dodaje jeden lub więcej elementów na koniec tablicy i zwraca nową długość tablicy. */
let moreFruits = ['apple', 'banana'];
moreFruits.push('cherry', 'orange');
console.log(moreFruits); // Output: ['apple', 'banana', 'cherry', 'orange'];

/* unshift(): Ta metoda dodaje jeden lub więcej elementów na początku tablicy i zwraca nową długość tablicy. */
let againFruits = ['cherry', 'orange'];
againFruits.unshift('apple', 'banana');
console.log(againFruits) // Output: ['apple', 'banana', 'cherry', 'orange'];

/* concat(): Ta metoda służy do łączenia dwóch lub więcej tablic. Metoda ta nie zmienia istniejących tablic, ale zwraca nową tablicę. */
let andAgainFruits = ['apple', 'banana'];
let andMoreFruits = ['cherry', 'orange'];
let allOfThem = andAgainFruits.concat(andMoreFruits);
console.log(allOfThem); // Output: ['apple', 'banana', 'cherry', 'orange'];

/* splice(): Metoda ta zmienia zawartość tablicy poprzez usunięcie lub zastąpienie istniejących elementów i/lub dodanie nowych elementów w ich miejsce. */
const fruitsToSplice = ['apple', 'banana', 'cherry', 'orange'];
//Syntax : arr.splice(start, deleteCount, item1, ..., itemN)
fruitsToSplice.splice(2, 1, 'mango', 'kiwi');
console.log(fruitsToSplice); // // Output: ['apple', 'banana', 'mango', 'kiwi', 'cherry', 'orange'];

/* flat(): Ta metoda tworzy nową tablicę ze wszystkimi elementami podtablicy konkatenowanymi w niej rekurencyjnie do określonej głębokości. */
const numbersNoFlat = [1, [2, [3]], 4];
const flatNumbers = numbersNoFlat.flat(Infinity);
console.log(flatNumbers); // Output: [1, 2, 3, 4];

/* lastIndexOf(): Ta metoda zwraca ostatni indeks, przy którym dany element można znaleźć w tablicy. */
const numbersToSearch = [1, 2, 3, 4, 5, 3];
const lastIndex = numbers.lastIndexOf(3);
console.log(lastIndex); // Output: 5;

/* indexOf(): Ta metoda zwraca indeks wystąpienia określonego elementu w tablicy. Jeśli element nie występuje, zwraca -1. */
const moreNumbers = [5, 10, 15, 20];
const index = moreNumbers.indexOf(10);
console.log(index); // Output: 1;

/* of(): ta metoda tworzy nową instancję tablicy ze zmienną liczbą argumentów, niezależnie od liczby lub typu argumentów. */
const mixArr = Array.of(1, 2, 3, "four", true);
console.log(mixArr); // Output: [1, 2, 3, "four", true];

/* every(): Ta metoda sprawdza, czy wszystkie elementy w tablicy przechodzą test (podany jako funkcja). Zwraca wartość true, jeśli wszystkie elementy przejdą test; w przeciwnym razie zwraca wartość false */
const evenArr = [2, 4, 6, 8];
const isEven = (num) => num % 2 === 0;
const result = evenArr.every(isEven);
console.log(result); // Output: true;

/* slice(): Ta metoda zwraca płytką kopię części tablicy do nowego obiektu tablicy wybranego od początku do końca (koniec nie jest uwzględniony) */
const arrToSliced = [1, 2, 3, 4, 5];
const slicedArr = arrToSliced.slice(2, 4);
console.log(slicedArr); // Output: [3, 4];

/* flatMap(): Ta metoda mapuje każdy element za pomocą funkcji mapującej, a następnie spłaszcza wynik do nowej tablicy. */
const arrToFlat = [1, 2, 3];
const resultFlat = arrToFlat.flatMap(x => [x * 2]);
console.log(resultFlat); // Output [2, 4, 6];

/* findIndex(): Ta metoda zwraca indeks pierwszego elementu w tablicy, który przeszedł test (dostarczony jako funkcja). Jeśli żaden element nie przejdzie testu, zwraca -1. */
const highArr = [10, 20, 30, 40, 50];
const greaterThan30 = (num) => num > 30;
const giveMeTheIndex = arr.findIndex(greaterThan30);
console.log(giveMeTheIndex); // Output: 3;

/* find(): Ta metoda zwraca wartość pierwszego elementu w tablicy, który przejdzie test (podany jako funkcja). Jeśli żaden element nie przejdzie testu, zwraca wartość undefined */
const againHighArr = [10, 20, 30, 40, 50];
const showResult = arr.find(greaterThan30);
console.log(showResult); // Output: 40;

/* includes(): Ta metoda określa, czy tablica zawiera określoną wartość wśród swoich wpisów, zwracając odpowiednio wartość true lub false. */
const someNumbers = [10, 20, 30, 40, 50];
const has20 = someNumbers.includes(20);
console.log(has20); // Output: true;

/* entries(): This method returns a new Array Iterator object that contains the key/value pairs for each index in the array. */
const letters = ["a", "b", "c"];
const iteratorEntries = arr.entries();
console.log(iteratorEntries.next().value); // Output: [0, "a"];
console.log(iteratorEntries.next().value); // Output: [1, "b"];
console.log(iteratorEntries.next().value); // Output: [2, "c"];

/* reduce(): ta metoda stosuje funkcję do każdego elementu tablicy i redukuje tablicę do pojedynczej wartości. */
const denominations = [10, 20, 10, 20, 5, 5, 5, 5, 10, 10];
// accumulator: Jest to wartość zwrócona z poprzedniej iteracji funkcji.
// curretnValue: Jest to bieżący element przetwarzany w tablicy.
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum) // Output: 100;

/* isArray(): Ta metoda określa, czy przekazana wartość jest tablicą, czy nie. */
const number = 123;
console.log(Array.isArray(number)) // Output: false;

/* filter(): Metoda ta tworzy nową tablicę zawierającą wszystkie elementy, które przeszły test zaimplementowany przez podaną funkcję. */
const moneyArr = [10, 20, 20, 50, 100, 200];
const filteredMoney = moneyArr.filter(number => {
    return number > 20;
}); // Output: [50, 100, 200];

/* keys(): Metoda ta zwraca tablicę zawierającą klucze danego obiektu. */
const myObj = {
    a: 1,
    b: 2,
    c: 3,
}
const keysArray = Object.keys(myObj);
console.log(keysArray); // Output ["a", "b", "c"];

/* map(): Ta metoda tworzy nową tablicę z wynikami wywołania podanej funkcji na każdym elemencie w wywołanej tablicy. */
const numbersToDo = [1, 2, 3, 4, 5];
const squaredNumbers = numbersToDo.map((number) => {
    return number * number
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25];  