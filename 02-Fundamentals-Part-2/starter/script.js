//FUNCTIONS
"use strict";

function logger() {
  console.log("My name is Joan");
}
// Calling / Running / Invoking function
// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
  return juice;
}
console.log(fruitProcessor(3, 5));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
// // Strict Mode
// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // const interface = "Audio";
// // const private = 2452;
// // const if = 23;
