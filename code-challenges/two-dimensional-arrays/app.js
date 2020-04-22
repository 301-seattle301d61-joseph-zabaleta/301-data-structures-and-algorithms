'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

You friend Pat has a chain of stores around the greater Seattle area. He specializes in selling salmon cookies. Pat has data for the hourly sales of cookies per hour for each store. He wants to create an array of the total number of cookies sold per hour for all of his stores combined.

Write a function named grandTotal that adds up the cookies sales for each hour of operation for all of the stores combined. For example, the first element in the hourlySales array should be the sum of the cookies sold in the 9:00 a.m. hour at all five stores combined.

For this example, the total at 9:00 a.m. is 17 + 26 + 7 + 5 + 33, or 88 total cookies.

Return the array of the total number of cookies sold per hour for all of the stores combined.
------------------------------------------------------------------------------------------------ */

const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

const grandTotal = (stores) => { 
    let answerArr = [];
    for (let i in hoursOpen) {
        let currentValue = 0;
        cookieStores.forEach(element => {
            currentValue += element[i];
        });
        answerArr.push(currentValue);
    }
return answerArr;
};


// console.log(grandTotal(cookieStores));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Pat has decided that he would also like to organize his data as objects containing the number of cookies sold per hour and the time.

Here is sample data for the 9:00 sales: { sales: '88 cookies', time: '9 a.m.' }.

Write a function named salesData that uses forEach to iterate over the hourlySales array and create an object for each hour. Return an array of the formatted data.
------------------------------------------------------------------------------------------------ */

const salesData = (hours, data) => {
    let answerArr = [];
    hours.forEach((element, i) =>{
       let obj = {};
       obj.sales = `${data[i]} cookies`;
       obj.time = element;
       answerArr.push(obj);
    });
    return answerArr;
  };

//   console.log(salesData(hoursOpen, [88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169]));

  /* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named howManyTreats that will return the quantity of treats you need to pick up from the pet store today from this array.
------------------------------------------------------------------------------------------------ */

const errands = [
    { store: 'Grocery store',
      items: [ { name: 'Eggs', quantity: 12 }, { name: 'Milk', quantity: 1 }, { name: 'Apples', quantity: 3 }]
    },
    { store: 'Drug store',
      items: [ { name: 'Toothpaste', quantity: 1 }, { name: 'Toothbrush', quantity: 3 }, { name: 'Mouthwash',quantity: 1 } ]
    },
    { store: 'Pet store',
      items: [ { name: 'Cans of food', quantity: 8 }, { name: 'Treats', quantity: 24 }, { name: 'Leash', quantity: 1 } ]
    }
  ];
  
  const howManyTreats = (arr) => errands[2].items[1].quantity;
      

//   console.log(howManyTreats(errands));

  /* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named battleship that accepts a 2D array and two numbers: a row coordinate and a column coordinate.

Return "hit" or "miss" depending on if there's part of a boat at that position in the array. Assume the array has only one of two values at each index. '#' for part of a boat, or ' ' for open water.

Here is a sample board:
[
  ['#', ' ', '#', ' '],
  ['#', ' ', '#', ' '],
  ['#', ' ', ' ', ' '],
  [' ', ' ', '#', '#'],
]

The top row of the board is considered row zero and row numbers increase as they go down.
------------------------------------------------------------------------------------------------ */

let gameBoard = [
    ['#', ' ', '#', ' '],
    ['#', ' ', '#', ' '],
    ['#', ' ', ' ', ' '],
    [' ', ' ', '#', '#'],
  ]


const battleship = (board, row, col) => board[row][col] === '#' ? 'hit' : 'miss'

//   console.log(battleship(gameBoard,2, 0));

  /* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named calculateProduct that takes in a two-dimensional array of numbers, multiplies all of the numbers in each array, and returns the final product. This function should work for any number of inner arrays.

For example, the following input returns a product of 720: [[1,2], [3,4], [5,6]]
------------------------------------------------------------------------------------------------ */
let testArr =  [[1,2], [3,4], [5,6]];

const calculateProduct = (numbers) => {
    let product = 1;
    numbers.forEach(element => {
        element.forEach(num =>{
            product *= num;
        });
    });
    return product;
  };

// console.log(calculateProduct(testArr));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named averageDailyTemperature that accepts a two-dimensional array representing average daily temperatures grouped week-by-week.

Calculate the average daily temperature during that entire period. Your output should be a single number. Write your function so it could accept an array with any number of weeks given to it.
------------------------------------------------------------------------------------------------ */

// Real daily average temperatures for Seattle, October 1-28 2017
const weeklyTemperatures = [
    [66, 64, 58, 65, 71, 57, 60],
    [57, 65, 65, 70, 72, 65, 51],
    [55, 54, 60, 53, 59, 57, 61],
    [65, 56, 55, 52, 55, 62, 57],
  ];
  
  const averageDailyTemperature = (weather) => {
    let total = null;
    let quantity = null;
    weather.forEach(element => {
        quantity += element.length;
        element.forEach(num => {
            total += num;
        });
    });
    return total/quantity;
  };

//   console.log(averageDailyTemperature(weeklyTemperatures));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8

Write a function called excel that accepts a string representing rows and columns in a table.

Rows are seperated by newline "\n" characters. Columns are seperated by commas. For example, '1,1,1\n4,4,4\n9,9,9' represents a 3x3 table.

The function should parse the string as rows and columns and compute the sum of the values for each row. Return an array with the sum of the values in each row.

For example, excel('1,1,1\n4,4,4\n9,9,9') returns [3, 12, 27].
------------------------------------------------------------------------------------------------ */
let testStr = '1,1,1\n4,4,4\n9,9,9';


const excel = (str) => {
    // Solution code here...
  };

console.log(excel(testStr));
