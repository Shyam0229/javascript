const num1 =[1,2,3,4,5]
const num2 =[6,7,8,9,10]
// num1.push(num2)
// console.log(num1); // [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]
// push is in same exit value chnage 


// const num3 =num1.concat(num2)
 // console.log(num3);    //  [ 
                        //     1, 2, 3, 4,  5,
                        //     6, 7, 8, 9, 10
                       //   ]
// concat means in variable need for changes 



// now we used in spread operator this is used in below
  // const num4=[...num1,...num2]
  // console.log(num4);  //  [ 
                    //     1, 2, 3, 4,  5,
                    //     6, 7, 8, 9, 10
                    //   ]
//






/* ........... flat- this is array in array in same array this case ...... */
 
// const num =[  1,2,3, [  4,5,6, [ 7,8,9, [10,11,12] ]  ]   ]
// const num5=(num.flat(Infinity))
// console.log(num5)  //  [
                   //   1,  2, 3, 4,  5,
                   //    6,  7, 8, 9, 10,
                   //     11, 12
                   //   ]
// in single array





/* console.log(Array.isArray(new Array(17)))  // array checked ,,true or false 
console.log(Array.isArray("shyam"))         // array checked ,,true or false 
console.log(Array.from("shyam"));           //[ 's', 'h', 'y', 'a', 'm' ] */





// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
Array.isArray({ __proto__: Array.prototype });



// console.log(Array.isArray("shyam"));
// console.log(Array.from("shyam"));
// console.log(Array.from({name:"shyam"})); // []  interisting



//value to array convert
let sc1=100
let sc2=200
let sc3=300
console.log(Array.of(sc1,sc2,sc3));  // [ 100, 200, 300 ]




