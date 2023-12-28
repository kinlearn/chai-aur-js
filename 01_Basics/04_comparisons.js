'use strict';
/* ---- STRING CONVERSION HAPPENS EVEN WITH ZEROS and NEGATIVES etc. ------ 
console.log("2" > 1); // true (kinda expected)
console.info("02" > 1.5); // Still true! 🤯 JS converts 02 into Number
console.log("-2" == -2); // JS even converts negative values to Numbers
*/


/* 
console.info(null > 0); // false
console.info(null < 0); // false
console.info(null == 0); // false
console.info(null >= 0); // true 🤬

An equality check (==) and comparisons (>, <, >=, <= etc.) work differently.
Comparison converts null to a number (i.e. 0). 
Therefore,
    1) null > 0 gives false as 0 is not greater than 0
    2) null >= gives true as 0 is equal to 0 although not greater
    3) But when we do null == 0, JavaScript does not convert null object to 0. So, obviously it returns false
*/

