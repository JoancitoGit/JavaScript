//CALLING FUNCTIONS INSIDE OTHER FUNCTIONS

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
