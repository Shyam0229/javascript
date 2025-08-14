
// FOR OF....................
const arr = [1,2,3,4,5]
for (const i of arr) {
    // console.log(i);
    
}


const values="hello world"
for (const value of values) {
    // console.log(`each character is a ${value}`);
    
}

//  Map
const map = new Map()
map.set('IN',"India")
map.set('US',"United States Of America")
map.set('FR',"France")

// console.log(map);
// console.log(typeof map);

for (const key of map) {
    // console.log(key);
    
}// this all are array format
// [ 'IN', 'India' ]
// [ 'US', 'United States Of America' ]
// [ 'FR', 'France' ]


// specific value
for (const [key] of map) {
    // console.log(key);
    
}
// IN
// US
// FR


for (const [key , value] of map) {
    // console.log(key, ' :- ' , value);
}
// IN :- India
// US :- United States Of America
// FR :- France


//  In object not use forof loop
const myObject={
    game:"call of duty",
    game2:"bgmi"
}
for (const [key,value] of myObject) {
    console.log(key, ' :- ' , value);
    // myObject is not iterable
}