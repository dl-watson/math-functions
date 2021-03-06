/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

export function sum(a, b) {
    let input1 = a;
    let input2 = b;
    let output = [];
    let sum = a + b;
    let string = `The sum of ${input1} and ${input2} is ${sum}.`;

    output[0] = sum;
    output[1] = string;

    return output;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first 
element is the product of those numbers, and the second element is a string that EXACTLY follows this example 
and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {
    let input1 = a;
    let input2 = b;
    let output = [];
    let product = a * b;
    let string = `The product of ${input1} and ${input2} is ${product}.`;


    output[0] = product;
    output[1] = string;

    return output;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiplyThreeNumbers() that takes in three 
numbers as separate arguments and returns 
an array where the first element is the sum of those three numbers, 
the second element is the product of those three numbers,  
and the third and fourth elements are strings that EXACTLY follow this example and 
use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() 
function that you've already created. You're going to have to be resourceful to figure out 
how to do this. However, you may continue to use the + operator for string concatenation.
*/

export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line

    // returns an array
    let array = [];
    let input1 = a;
    let input2 = b;
    let input3 = c;
    // array[0] -- is the sum of a, b and c
    let value1 = sum(input1, input2)[0];
    array[0] = sum(value1, input3)[0];
    // array[1] -- is the product of a, b and c

    let placeholder1 = multiply(input1, input2)[0];
    let placeholder2 = multiply(placeholder1, input3)[0];
    array[1] = placeholder2;

    // array[2] -- strings "4 and 7 and 5 sum to 16."
    array[2] = `${input1} and ${input2} and ${input3} sum to ${array[0]}.`;

    // array[3] -- strings "The product of 4 and 7 and 5 is 140."
    array[3] = `The product of ${input1} and ${input2} and ${input3} is ${array[1]}.`;

    return array;

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArrayWithThreeNumbers() that takes in an array of numbers 
as its single argument and then returns an array where the first element is the sum 
of the numbers in the array, and the second element is a string that EXACTLY follows 
this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. 
To do addition, use your sum() function that you've already created. You're going to 
have to be resourceful to figure out how to do this. However, you may continue 
to use the + operator for string concatenation.
*/

export function sumArrayWithThreeNumbers(sumArr) {
    // takes in an array of numbers, and returns an array
    let array = [];

    // array[0] -- sum of numbers in the passed array // don't use + 
    let val = 0;
    for (let i = 0; i < sumArr.length; i++) {
        val = sum(sumArr[i], val)[0];
    }
    array[0] = val;

    // array[1] -- a string "2,3,4 was passed in as an array of numbers, and 9 is their sum."
    array[1] = `${sumArr} was passed in as an array of numbers, and ${array[0]} is their sum.`;
    return array;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArrayWithThreeNumbers() that takes an array of numbers 
as its argument and returns an array whose first element is the product of those numbers, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. 
To do multiplication, use your multiply() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
This function should handle an array containing three elements. However, 
you may continue to use the + operator for string concatenation.
*/

export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    // takes in an array of numbers, and returns an array
    let array = [];

    // array[0] -- product of elements in multArr
    let val = 1;
    for (let i = 0; i < multArr.length; i++) {
        val = multiply(multArr[i], val)[0];
    }
    array[0] = val;
    // array[1] -- a string "The numbers 2,3,4 have a product of 24."
    array[1] = `The numbers ${multArr} have a product of ${array[0]}.`;

    return array;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its 
argument and returns an array whose first element is the product of those numbers, and the 
second element is a string that EXACTLY follows this example and concatenates a message using 
the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.
*/

export function multiplyAnyArray(dynamicArray) { //eslint-disable-line
    // takes an array, and returns an array
    let array = [];

    // array[0] -- product of values in passed array
    let val = 1;
    for (let i = 0; i < dynamicArray.length; i++) {
        val = multiply(dynamicArray[i], val)[0];
    }
    array[0] = val;

    // array[1] -- a string "The numbers 1,2,3,4,5 have a product of 120."
    array[1] = `The numbers ${dynamicArray} have a product of ${array[0]}.`;

    return array;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
