// ARRAYS OPERATIONS
const friends = ["Joan", "Samir", "David"];
// ADD ELEMENTS
const newLength = friends.push("Willy");
console.log(friends);
console.log(newLength);
friends.unshift("Uriel");
console.log(friends);

// REMOVE ELEMENTS
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// POSITION
console.log(friends.indexOf("Samir"));
console.log(friends.indexOf("BOB"));

console.log(friends.includes("Samir"));

//ARRAYS

// const friends = ["Joan", "Samir", "David"];
// console.log(friends);

// // const years = new Array(1991, 1966, 1961, 1996);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// console.log(age1, age2, age3);

// const ages = [age1, age2, age3];
// console.log(ages);

//CALLING FUNCTIONS INSIDE OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// ARROW FUNCTION
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Joan"));

// // FUNCTION EXPRESSIONS

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// console.log(calcAge2(2000));

// //FUNCTIONS
// "use strict";

// function logger() {
//   console.log("My name is Joan");
// }
// // Calling / Running / Invoking function
// // logger();
// // logger();
// // logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
//   return juice;
// }
// console.log(fruitProcessor(3, 5));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// // Strict Mode
// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // const interface = "Audio";
// // const private = 2452;
// // const if = 23;
