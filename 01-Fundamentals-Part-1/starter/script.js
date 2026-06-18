// /*let js = "Amazing";
// //if (js === "Amazing") alert("JavaScript is FUN!");
// //else alert("JavaScript is BORING!");
// console.log(40 + 8 + 23 - 10);

// ///////////////////////////////////////
// let firstName = "Jonas";
// console.log(firstName);
// firstName = "Matilda";
// console.log(firstName);

// /////////////////////////////////////////
// */
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof true);
// // console.log(typeof javaScriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");
// // javaScriptIsFun = "YES!";
// // console.log(typeof javaScriptIsFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);
// // year = 1991;
// // console.log(typeof year);
// //console.log(typeof null);
// //////////////////////////////////////////
// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);
// // // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // // //////////////////////////////////////////////////
// // // const firstName = "Jonas";
// // // const lastName = "Schmedtmann";
// // // console.log(firstName + " " + lastName);
// // ///////////////////////////////////////////
// // let x = 10 + 5; //15
// // x += 10; // x = x + 10
// // console.log(x);
// // x *= 4; // x = x * 4
// // console.log(x);
// // x++; // x = x + 1
// console.log(x);
// // //////////////////////////////////////////
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // const isFullAge = ageSarah >= 18;
// // console.log(now - 1991 > now - 2018);
// // ///////////////////////////////////////////
// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(now - 1991 > now - 2018);
// // //////////////////////////////////////////
// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);
// // /////////////////////////////////////
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;
// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / heightJohn ** 2;
// // const markHigherBMI = BMIMark > BMIJohn;
// // console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);
// console.log(`Just a regular string...`);
// console.log("String with \n\nmultiple\nlines");
// console.log(`String
// with
// multiple
// lines`);

// const day = "Monday";
// switch (day) {
//   case "Monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples");
//     break;
//   case "Friday":
//     console.log("Record videos");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`,
// );
// console.log(
//   `THe bill was ${bill}, the tip was ${tip}, and the total value of the bill is ${bill + tip}`,
// );
// const age = 45;
// age >= 18 ? console.log("I am a middle aged man") : console.log("I am a child");

const age = 23;
const drink = age >= 18 ? "Wine" : "Water";
console.log(`I am ready to drink ${drink}`);
console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`);
