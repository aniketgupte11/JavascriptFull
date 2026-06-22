// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const funcAge = (age) => {
//   const currYear = new Date().getFullYear();
//   const currAge = currYear - age;
//   console.log(`Current age is ${currAge}`);
//   const retirementAge = 65 - currAge;
//   return `Retirement years remaining are ${retirementAge}`;
// };
// console.log(funcAge(1981));
////////////////////////////////////////////////////////
// const convertToKg = (g) => {
//   console.log(`Converted weight in KG ${grams / 1000} Kgs`);
// };
// const grams = prompt("Add your weight in grams here");
// convertToKg(grams);
///////////////////////////////////////////////////////
// let temps = [-4, 10, 4, 5, 6, 33, "error", -1, -2, -6];
// let calcTempAmplitude = (temps) => {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i <= temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   const amplitude = max - min;
//   console.log(max, min);
//   return amplitude;
// };
// console.log(`Amplitude is ${calcTempAmplitude(temps)}`);

// Now with 2 arrays.
// Merge the 2 arrays before the function is called
// let temps = [-4, 10, 4, 5, 6, 33, "error", -1, -2, -6];
// let temps2 = [-4, -14, 4, 15, 6, 13, 23, "error", -1, -2, -6];
// let calcTempAmplitude = (t) => {
//   let max = t[0];
//   let min = t[0];
//   for (let i = 0; i <= t.length; i++) {
//     if (typeof t[i] !== "number") continue;
//     if (t[i] > max) {
//       max = t[i];
//     }
//     if (t[i] < min) {
//       min = t[i];
//     }
//   }
//   const amplitude = max - min;
//   console.log(max, min);
//   return amplitude;
// };
// // Here the arrays are merged   before passing to the cl below
// let consilidatedTemps = temps.concat(temps2);
// console.log(consilidatedTemps);
// console.log(`Amplitude is ${calcTempAmplitude(consilidatedTemps)}`);
//////////////////////////////////////////////////////////////////////////
// const measureKelvin = () => {
//   const measurement = {
//     type: "temp",
//     unit: "kelvin",
//     // FIX. vlaue which is a string to number
//     value: Number(prompt("Add temperature in celsius")),
//   };
//   //FIND :- value of prompt is a string always
//   console.table(measurement);
//   const kelvin = measurement.value + 273;

//   return kelvin;
// };
// //IDENTIFY
// console.log(measureKelvin(10));
////////////////////////////////////////////////////////////////////////
// Challange
// let temps = [17, 21, 23];
// const printForcast = (temps) => {
//   let str = "";
//   for (let i = 0; i < temps.length; i++) {
//     str = str + ` ... ${temps[i]}C in ${i + 1} Days`;
//     // console.log(`${temps[i]}C on Day${i + 1}`);
//   }
//   console.log(str);
// };
// printForcast(temps);
//////////////////////////////////////////////////////////////////////
