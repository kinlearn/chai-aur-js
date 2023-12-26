// 'use strict';

let score = '22';

// console.info(typeof score);

let valueInNumber = Number(score); 
console.log(typeof valueInNumber);


score = null;
// console.log(score); // null

// Truthy and falsy values : 0, "", null, undefined, false become false all other become true

let a = 0
const truthy = a ? `truthy` : `falsy`;
console.log(truthy);