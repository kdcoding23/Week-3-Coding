// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
{let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
    let first = ages[0];
    let last = ages[ages.length - 1];
    console.log(last - first);}

// b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages = [3, 9, 23, 64, 2, 8, 28, 93, 100];
    let first = ages[0];
    let last = ages[ages.length - 1];
    console.log(last - first);

// c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.
var sum = 0;
for (var number of ages) {
    sum += number;
}
var average = sum / ages.length;
console.log(average);

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tim", "Sally", "Buck", "Bob" ];

// a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let letters = 0;
for(let i=0; i<names.length; i++){
    letters += names[i].length;
}
console.log(letters/names.length);

// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
for (var i = 0; i < names.length; i++){
    joinNames = names.join(" ");
    console.log(joinNames);
}

// 3. How do you access the last element in any array?
let lastElement = names[names.length - 1];
console.log(lastElement);

// 4. How do you access the first element of any array?
let firstElement = names[0];
console.log(firstElement);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [3, 3, 5, 4, 3];
function createLengthArray(names){
    for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i]);
    }
}
createLengthArray(names);
console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
var sum = 0;
for (let i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
}
console.log(sum);
// console shows the correct sum of 18, along with each name in the names array

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatTwoParameters(word, n){
    var repeatedString = "";
    while (n > 0){
        repeatedString += word;
        n--;
    }
    return repeatedString;
}
console.log(concatTwoParameters("Hello", 3));

//  8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function createFullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}
createFullName("Katie", "Orgen");

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
var arrayOfNumbers = [20, 45, 25, 60];
function arraySum(arrayOfNumbers){
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++){
        sum += arrayOfNumbers[i];
    }
    if (sum > 100){
        return true;
    } else {
        return false;}
}
console.log(arraySum(arrayOfNumbers));
// sum of numbers above are > 100 so the console will print true.

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
arrayOfNumbers = [2, 6, 12, 4];

let avgOfElements = arrayOfNumbers.reduce((a, b) => a + b, 0) / arrayOfNumbers.length

console.log(avgOfElements);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let array1 = [2, 4, 6];
let array2 = [1, 2, 3];
function compareAvgs(avgOfArray1, avgOfArray2){
    var avgOfArray1 = array1.reduce((a, b) => a + b, 0) / array1.length;
    var avgOfArray2 = array2.reduce((a, b) => a + b, 0) / array2.length;
    if (avgOfArray1 > avgOfArray2){
        return true;
        } else {
        return false;
    }
}
console.log(compareAvgs());

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
   if (isHotOutside > 80 && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(90, 12));


// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
let paycheckArray = [200, 150, 180, 300];
function arraySum(paycheckArray){
    let sum = 0;
    for (let i = 0; i < paycheckArray.length; i++){
        sum += paycheckArray[i];
    }
    if (sum > 1000){
        return true;
    } else {
        return false;}
}
console.log(arraySum(paycheckArray));
// This function shows one's weekly salary. They want to know if they make more than $1000 at the end of any given month. If they do, the console will return true and they can buy the laptop they want. If it returns false, then they have to earn more per month to be able to purchase the laptop.