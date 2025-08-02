const name = " shyam "
const value =   50


// console.log(name +  value + " kumar malik ");

// console.log(`hello my name is ${name}, my value is ${value} `); 
// this use for string interpolation

const Name = new String('shyam kumar malik 1 2 3') // this is a one way to print string

// console.log(Name);  //[String: 'shyam']

// console.log(Name[0]) // s

// console.log(Name.__proto__);  //prtotype is {}-this means object type 

// console.log(Name.length); //5
// console.log(Name.toUpperCase()); // all are uper format
// console.log(Name.charAt(2));
// console.log(Name.indexOf("a"));


let newName =Name.substring(0,2)
// console.log(newName);


let anotherName=Name.slice(-8,2)
// console.log(anotherName);

let userName="   shyam kumar malik "
console.log(userName); //    shyam  
console.log(userName.trim());//shyam  .. extra space are not use here 


const url = "https://shyam.com/shyamkumargoogle"
console.log(url.replace('kumar',"-"));
console.log(url.includes('shyam')); // trure or false ,,find the value in string


console.log(Name.split(""));  
// [
//   's', 'h', 'y', 'a', 'm',
//   ' ', 'k', 'u', 'm', 'a',
//   'r', ' ', 'm', 'a', 'l',
//   'i', 'k', ' ', '1', ' ',
//   '2', ' ', '3'
// ]

console.log(Name.split(" ")); // [ 'shyam', 'kumar', 'malik', '1', '2', '3' ]
