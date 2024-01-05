// Premitive & Reference (non premitive)

/*
Premitive - 7 types : Call by value (you are given copy of these. not original reference in the memory)
Number, boolean, string, null, undefined, Symbol, bigInt
*/

const score = 100;
const grade = 3.423;
const isAlpha = true;
const outsideTemp = null;
let undefinedVar;
const id = Symbol('1234');
const anotherId = Symbol('1234');
console.log(id === anotherId); // false

const big = 3274987932498723984n;
console.log(typeof big)


// Reference 

// Array, Objects, functions

const heros = ['a', 'b', 'c'];
const me = {
    firstName : "Ajinkya",
    lastName : "Kinhikar",
    age : 31
}




