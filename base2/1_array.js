// ARRAY
// array decleared in two ways 
// 1
const array= [1,5,"shyam"]
// console.log(array[2]);
// console.log(array);

//2
const myarray= new Array(10,89,45,"kuamr",78,"malik")
// console.log(myarray[4]);


// array methods
// myarray.push("kolkata")
// console.log(myarray);
// myarray.pop() // at the end position remove
// console.log(myarray);


// myarray.unshift(80)  // unshift use for starting index add value 
// myarray.shift() // remove the item from start index
// console.log(myarray);
// console.log(myarray.includes(552)); // false this is use for find the value in the array
// console.log(myarray.indexOf(552)); // index find.. the particular value



// convert the array into string foramat .....
 
// let myarray1=myarray.join() // join means array convert into string formmat
// console.log(typeof myarray1); // string 
// console.log(myarray1);  // 10,89,45,kuamr,78,malik 



// slice and splice

// console.log("A",myarray)  //A [ 10, 89, 45, 'kuamr', 78, 'malik' ]
// // let l1 =myarray.length
// let newarray=myarray.slice(1,4) 
// console.log("B",newarray);  // B [ 89, 45, 'kuamr' ]
// console.log(myarray);  //  [ 10, 89, 45, 'kuamr', 78, 'malik' ]


// console.log("A",myarray)   // A [ 10, 89, 45, 'kuamr', 78, 'malik' ]
// let newarray2=myarray.splice(1,4) 
// console.log("C",newarray2);  //  C [ 89, 45, 'kuamr', 78 ]
// console.log(myarray);   // [ 10, 'malik' ]

// slice
    //    start and end index   A [ 10, 89, 45, 'kuamr', 78, 'malik' ]
    //    value find     (1,4)           B [ 89, 45, 'kuamr' ]
    //    old array no change ,
    //    slice methods using no change   [ 10, 89, 45, 'kuamr', 78, 'malik' ]

//splice 
    // start and end index  A [ 10, 89, 45, 'kuamr', 78, 'malik' ]
    // value find and end index portion go..  (1,4)    C [ 89, 45, 'kuamr', 78 ]
    //  old array  changes ,  [ 10, 'malik' ]
    // splice means value all ways deleted
    
