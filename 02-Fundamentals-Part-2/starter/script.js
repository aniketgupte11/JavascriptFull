// // // // "use strict"; // Strict mode is a way to opt in to a restricted variant of JavaScript, which can help catch common coding mistakes and "unsafe" actions. It can be enabled by adding the directive "use strict"; at the beginning of a script or a function.
// // // // // let hasDriversLicense = false;
// // // // // const passTest = true;

// // // // // if (passTest) {
// // // // //   hasDriversLicense = true;
// // // // // }
// // // // // if (hasDriversLicense) {
// // // // //   console.log("I can drive :D");
// // // // // }
// // // // // const testString = (name) => {
// // // // //   "use strict";
// // // // //   return `Hello, ${name}!`;
// // // // // };
// // // // // console.log(testString("Alice"));
// // // // //////////////////////////////////////////

// // // // // function logger(n) {
// // // // //   console.log(`My name is ${n}`);
// // // // // }
// // // // // //calling / running / invoking function
// // // // // logger("Aniket"); // Calling / Running / Invoking function
// // // // // logger("Alice");
// // // // ///////////////////////////////////////////
// // // // // function fruitProcessor(apples, oranges) {
// // // // //   console.log(apples, oranges);
// // // // //   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// // // // //   return juice;
// // // // // }
// // // // // const juice = fruitProcessor(5, 0);
// // // // // const juice2 = fruitProcessor(2, 3);
// // // // // console.log(juice);
// // // // // console.log(juice2);
// // // // ////////////////////////////////////////////

// // // // // //fuction declaration. Here function can be called before it is defined in the code. This is because of a feature called "hoisting" in JavaScript, which allows function declarations to be moved to the top of their scope during the compilation phase. This means that you can call a function before it is defined in the code, and it will still work as expected.
// // // // // function calcAge1(birthYear) {
// // // // //   return 2026 - birthYear;
// // // // // }
// // // // // const age1 = calcAge1(1991);
// // // // // console.log(age1);
// // // // // //function expression. Here function cannot be called before it is defined in the code. This is because function expressions are not hoisted in the same way as function declarations. When you define a function expression, it is treated as a variable assignment, and the variable is not hoisted to the top of its scope. Therefore, if you try to call a function expression before it is defined, you will get a ReferenceError because the variable has not been initialized yet.
// // // // // const calcAge2 = function (birthYear) {
// // // // //   return 2026 - birthYear;
// // // // // };
// // // // // const age2 = calcAge2(1981);
// // // // // console.log(age2);
// // // // ////////////////////////////////////////////
// // // // //arrow function
// // // // //If only 1 parameter, we can omit the parentheses around the parameter. If the function body contains only a single expression, we can omit the curly braces and the return keyword. The value of that expression will be implicitly returned by the function.
// // // // // //const calcAge3 = (birthYear)=>{return birthyear => 2026 - birthYear;};
// // // // // const calcAge3 = (birthYear) => 2026 - birthYear;
// // // // // const age3 = calcAge3(2012);
// // // // // console.log(age3);
// // // // ////////////////////////////////////////
// // // // // const yearsUntilretirement = (birthYear, firstName) => {
// // // // //   const age = 2026 - birthYear;
// // // // //   const retirement = 65 - age;
// // // // //   return `${firstName} retires in ${retirement} years.`;
// // // // // };
// // // // // console.log(yearsUntilretirement(1991, "Aniket"));
// // // // // console.log(yearsUntilretirement(1981, "Alice"));
// // // // ////////////////////////////////
// // // // const cutPieces = (fruit) => {
// // // //   return fruit * 4;
// // // // };
// // // // const juice = (apples, oranges) => {
// // // //   const applePieces = cutPieces(apples);
// // // //   const orangePieces = cutPieces(oranges);
// // // //   return `Juice with ${apples} apples cut into ${applePieces} pieces of apple and ${oranges} oranges cut into ${orangePieces} pieces of orange.`;
// // // // };
// // // // console.log(juice(2, 3));
// // // // console.log(juice(4, 6));
// // // // //////////////////////////////////////////////
// // // "use strict"; // Strict mode is a way to opt in to a restricted variant of JavaScript, which can help catch common coding mistakes and "unsafe" actions. It can be enabled by adding the directive "use strict"; at the beginning of a script or a function.
// // // // // let hasDriversLicense = false;
// // // // // const passTest = true;

// // // // // if (passTest) {
// // // // //   hasDriversLicense = true;
// // // // // }
// // // // // if (hasDriversLicense) {
// // // // //   console.log("I can drive :D");
// // // // // }
// // // // // const testString = (name) => {
// // // // //   "use strict";
// // // // //   return `Hello, ${name}!`;
// // // // // };
// // // // // console.log(testString("Alice"));
// // // // //////////////////////////////////////////

// // // // // function logger(n) {
// // // // //   console.log(`My name is ${n}`);
// // // // // }
// // // // // //calling / running / invoking function
// // // // // logger("Aniket"); // Calling / Running / Invoking function
// // // // // logger("Alice");
// // // // ///////////////////////////////////////////
// // // // // function fruitProcessor(apples, oranges) {
// // // // //   console.log(apples, oranges);
// // // // //   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// // // // //   return juice;
// // // // // }
// // // // // const juice = fruitProcessor(5, 0);
// // // // // const juice2 = fruitProcessor(2, 3);
// // // // // console.log(juice);
// // // // // console.log(juice2);
// // // // ////////////////////////////////////////////

// // // // // //fuction declaration. Here function can be called before it is defined in the code. This is because of a feature called "hoisting" in JavaScript, which allows function declarations to be moved to the top of their scope during the compilation phase. This means that you can call a function before it is defined in the code, and it will still work as expected.
// // // // // function calcAge1(birthYear) {
// // // // //   return 2026 - birthYear;
// // // // // }
// // // // // const age1 = calcAge1(1991);
// // // // // console.log(age1);
// // // // // //function expression. Here function cannot be called before it is defined in the code. This is because function expressions are not hoisted in the same way as function declarations. When you define a function expression, it is treated as a variable assignment, and the variable is not hoisted to the top of its scope. Therefore, if you try to call a function expression before it is defined, you will get a ReferenceError because the variable has not been initialized yet.
// // // // // const calcAge2 = function (birthYear) {
// // // // //   return 2026 - birthYear;
// // // // // };
// // // // // const age2 = calcAge2(1981);
// // // // // console.log(age2);
// // // // ////////////////////////////////////////////
// // // // //arrow function
// // // // //If only 1 parameter, we can omit the parentheses around the parameter. If the function body contains only a single expression, we can omit the curly braces and the return keyword. The value of that expression will be implicitly returned by the function.
// // // // // //const calcAge3 = (birthYear)=>{return birthyear => 2026 - birthYear;};
// // // // // const calcAge3 = (birthYear) => 2026 - birthYear;
// // // // // const age3 = calcAge3(2012);
// // // // // console.log(age3);
// // // // ////////////////////////////////////////
// // // // // const yearsUntilretirement = (birthYear, firstName) => {
// // // // //   const age = 2026 - birthYear;
// // // // //   const retirement = 65 - age;
// // // // //   return `${firstName} retires in ${retirement} years.`;
// // // // // };
// // // // // console.log(yearsUntilretirement(1991, "Aniket"));
// // // // // console.log(yearsUntilretirement(1981, "Alice"));
// // // // ////////////////////////////////
// // // // const cutPieces = (fruit) => {
// // // //   return fruit * 4;
// // // // };
// // // // const juice = (apples, oranges) => {
// // // //   const applePieces = cutPieces(apples);
// // // //   const orangePieces = cutPieces(oranges);
// // // //   return `Juice with ${apples} apples cut into ${applePieces} pieces of apple and ${oranges} oranges cut into ${orangePieces} pieces of orange.`;
// // // // };
// // // // console.log(juice(2, 3));
// // // // console.log(juice(4, 6));
// // // // //////////////////////////////////////////////
// // // //Arrays
// // // // const friends = ["Michael", "Steven", "Peter"];
// // // // console.log(friends);
// // // // console.log(friends[0]);
// // // // console.log(friends[2]);
// // // // console.log(friends.length);
// // // // console.log(friends[friends.length - 1]);

// // // // const friends = ["Michael", "Steven", "Peter"];
// // // // friends.push("Jay"); // Adds a new element to the end of the array and returns the new length of the array.
// // // // console.log(friends);
// // // // friends.unshift("John"); // Adds a new element to the beginning of the array and returns the new length of the array.
// // // // console.log(friends);
// // // // const lastFriend = friends.pop();//Removes the last element ofthe arrya and returns the removed element.
// // // // console.log(lastFriend);
// // // // console.log(friends);
// // // // friends.shift(); // Removes the first element from the array and returns that removed element.
// // // // console.log(friends);
// // // // console.log(friends.indexOf("Steven"));

// // // const jonas = {
// // //   firstName: "Jonas",
// // //   lastName: "Schmedtmann",
// // //   age: 2026 - 1991,
// // //   job: "teacher",
// // //   friends: ["Michael", "Peter", "Steven"],
// // // };
// // // console.log(jonas, jonas.friends[2]);
// // // console.log(jonas.lastName);
// // // console.log(jonas["lastName"]);
// // // const nameKey = "Name";
// // // console.log(jonas["first" + nameKey]);
// // // console.log(jonas[`last${nameKey}`]);

// // // // const interestedIn = prompt(
// // // //   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends",
// // // // );
// // // // if (jonas[interestedIn]) {
// // // //   console.log(jonas[interestedIn]);
// // // // } else {
// // // //   console.log(
// // // //     "Wrong request! Choose between firstName, lastName, age, job, and friends",
// // // //   );
// // // // }
// // // jonas.location = "Portugal";
// // // jonas["twitter"] = "@jonasschmedtman";
// // // console.log(jonas);
// // // console.log(
// // //   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`,
// // // );

// // const jonas = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,
// //   calcAge: function () {
// //     const age = 2026 - this.birthYear;
// //     return age;
// //   },
// //   getSummary: () => {
// //     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
// //   },
// // };
// // console.log(jonas.calcAge());
// // console.log(jonas.age);
// // console.log(jonas.getSummary());
// ///////////////////////////////////////////////////////

// //for loop keeps running while condition is TRUE
// // for (rep = 1; rep <= 10; rep++) {
// //   console.log(`Lifting weight for the ${rep} time 🏋️`);
// // }
// //////////////////////////////////////////////////////

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2026 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// // const types = [];
// // for (i = 0; i <= jonas.length; i++) {
// //   console.log(jonas[i], typeof jonas[i]);
// //   types.push(typeof jonas[i]);
// // }
// // console.log(types);
// // const birthYears = [1991, 2007, 1969, 2020];
// // const ages = [];
// // for (i = 0; i < birthYears.length; i++) {
// //   ages.push(2026 - birthYears[i]);
// // }
// // console.log(ages);
// ////////////////////////////////////////////////////
// // continue and break
// // console.log("----ONLY STRINGS----");
// // for (i = 0; i <= jonas.length; i++) {
// //   if (typeof jonas[i] !== "string") continue;
// //   console.log(jonas[i]);
// // }
// // console.log("----BREAK WITH NUMBER----");
// // for (i = 0; i <= jonas.length; i++) {
// //   if (typeof jonas[i] === "number") break;
// //   console.log(jonas[i]);
// // }
// const reversedJonas = [];
// for (i = jonas.length - 1; i >= 0; i--) {
//   reversedJonas.push(jonas[i]);
// }
// console.log(reversedJonas);
///////////////////////////////////////////////
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`------ Starting exercise ${exercise} ------`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
//   }
// }
/////////////////////////////////////////////////
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep} 🏋️`);
//   rep++;
// }
/////////////////////////////////////////////////
//Dice Game
// let dice = Math.trunc(Math.random() * 6 + 1);
// console.log(dice);
// while (dice !== 6) {
//   console.log("Your dice rolled " + dice);
//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice === 6) {
//     console.log("Your dice finally rolled a " + dice);
//   }
// }
// if (dice === 6) {
//   console.log("Your dice rolled a " + dice);
// }
//////////////////////////////////////////////////

//Tips calculator
// const calcTips = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 152];
// const tips = [];
// const totals = [];
// for (let i = 0; i < bill.length; i++) {
//   const tip = calcTips(bill[i]);
//   tips.push(tip);
//   totals.push(tip + bill[i]);
// }
// console.log(`The tips are ${tips} and the totals are ${totals}`);

// const calcAverage = function (arr) {
//   let sum = 0;
//   let doubleArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     doubleArr.push(arr[i] * 2);
//   }
//   console.log(sum, doubleArr);
//   return sum / arr.length;
// };
// console.log(`The average is ${calcAverage([22, 22, 22, 22, 22])}`);
// console.log(`The average total is ${calcAverage(totals)}`);
// console.log(`The average tip is ${calcAverage(tips)}`);
/////////////////////////////////////////////////////
