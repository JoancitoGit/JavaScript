//Equality operators == vs ===
const age = "18";
if (age === 18) console.log("You just became and adult :D (strict)");

if (age == 18) console.log("You just became and adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite != 23) console.log("Why not 23?");

//TRUTHY AND FALSY VALUES
//5 falsy values 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height;
// if (height) {
//   console.log("Yay! Height is defined!");
// } else {
//   console.log("Height is UNDEFINED");
// }

//TYPE CONVERSION
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// //TYPE COERCION
// console.log("I am " + 23 + " years old");
// console.log("I am " + String(23) + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);
// //TAKING DECISIONS IF / ELSE STATEMENTS
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// //Strings and Template Literals
// const firstName = "Jonas";
// const job = "Teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(
//   "String with \n\
//   multiple \n\
//   lines"
// );

// console.log(`---------
// Multiple
// Lines
// String
// ---------`);

//OPERATORS PRECEDENCE
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);
//OPERATORS
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// //Math operators
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assigment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1;
// x--; // x = x - 1;
// x--;
// console.log(x);

// // Comparison operators produce a Boolean
// console.log(ageJonas > ageJonas); // > , <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2019);

//LET, CONST AND VAR
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// // const job;

// var job = "Programmer";
// job = "Teacher";

// lastName = "Schmedtmann";
// console.log(lastName);
//DATA TYPES
// let javascriptIsFun = true;
// // console.log(javascriptIsFun);
// // console.log(typeof true);
// // console.log(typeof javascriptIsFun);
// // // console.log(typeof 23);
// // // console.log(typeof "Jonas");

// // javascriptIsFun = "YES";
// // console.log(typeof javascriptIsFun);
// let year;
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

//VARIABLES AND CONSOLE.LOG() FUNCTION
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);

// let PI = 3.1416;

// let myFirstJob = "Front End Developer";
// let myCurrentJob = "Full Stack Developer";

// console.log(myCurrentJob);
