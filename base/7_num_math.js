const score = 500
// console.log(score)  // 500

const newScore= new Number(1000)
// console.log(newScore);  //  [Number: 1000]
 
// console.log(newScore.toString());  // stirng convert 1000

// console.log(newScore.toString().length);  // 4..all ways we find the value
                                           //  of string 

// console.log(newScore.toFixed(2));  // 1000.00 this use for ecomarce project,
                                        // 2 means 2 zeros in the number .00
 

     // here poin value to decimal number count //
const othernumber1 =23.896 
// console.log(othernumber1.toPrecision(3)); 23.9

const othernumber2 =123.896
// console.log(othernumber2.toPrecision(3));  //124

const othernumber3 =1123.896
// console.log(othernumber3.toPrecision(3));  //1.12e+3

const othernumber4 =1000000000000000
// console.log(othernumber4.toLocaleString('en-IN'));  //1,00,00,00,00,00,00,000 , 
                            // indian value convert in cooma for best calculation



//+++++++++++++++ MATH ++++++++++++++

console.log(Math);  // Object [Math] {}

console.log(Math.abs(-4)); //4   abs is used in  positive valu converted
console.log(Math.abs(10)); //10


console.log(Math.round(4.6));  // 5  , round value 4.6 means --- 5

console.log(Math.ceil(4.2)); // 5--- 4 up value  
console.log(Math.floor(4.2)); //4----- . of less value


console.log(Math.min(7,5,2,8,9)); // 2
console.log(Math.max(7,5,2,8,9)); // 9

