const myObject={
    js : "javascript",
    cpp : "C++",
    rb :"ruby",
    swift :"swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


const programming=['js','cpp','py','java','php']
for (const key in programming) {
    // console.log(` ${key} of array and programning ${programming[key]}`);
    
}
//  0 of array and programning js
//  1 of array and programning cpp
//  2 of array and programning py
//  3 of array and programning java
//  4 of array and programning php





const map = new Map()
map.set('IN',"India")
map.set('US',"United States Of America")
map.set('FR',"France")
for (const key in map) {
    console.log(key);
    
}
// not itteration perfrome 