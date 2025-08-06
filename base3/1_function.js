function sayMyname (){
    console.log("s");
    console.log("h");
    console.log("y");
    console.log("a");
    console.log("m");
    
    
}
// sayMyname()  // paranthesis ()means excution,

// function addTwoNumbers(num1,num2) {   // parameters 
//    console.log(num1+num2);
   
    
// }
// addTwoNumbers() //NaN
// addTwoNumbers(3,4) //  argument
// addTwoNumbers(3,"a") //  argument 
// addTwoNumbers(3,null) // argument

// const result =addTwoNumbers(3,5) 
// console.log("result is ",result);  //undefined


function addTwoNumbers(num1,num2) {   // parameters 
  let result = num1+num2
  return result
  console.log("shyam"); //not excute this all line when return function call
  console.log("shyam");
           // same as well as uper ...return num1+num2
    
}
const result = addTwoNumbers(10,15)
// console.log(result); // 25 this value are return 



//............... now create a new function...

function loginUser(username){
    if(username===undefined){         // (!username) this a same 
       console.log("please enter a username");
       return
       
    }
   return (`${username} this is me..`)
    

}
// console.log(loginUser("shyam"))
// console.log(loginUser("")) //  this is me... empty string
// console.log(loginUser()) //  undefined this is me..



// ..........function object and array ........

function flipAddToCartPrice(val1,val2,val3m,...num){  // ...num this is now rest operator or spread operator
    return num
}
// console.log(flipAddToCartPrice(200,78,89,25,74));  //[ 200, 78, 89, 25, 74 ]
                                                    // [ 25, 74 ]
 



//object
const user= {
    name:"shyam",
    price:199
} 
//fuction in user
function handelObject(anyobject){
       console.log(`Usernsme is ${anyobject.name} and price ${anyobject.price}`);
       
}
// handelObject(user)


function handelObject1(anyobject){
       console.log(`Usernsme is ${anyobject.name} and price ${anyobject.price}`);
       
}
// handelObject1({ 
//     name:"sujoy",
//     price:199
// })


// arrray
 const newArray=[25,40,3,10]

 // func of array
function secondValueOFArray(getNewArray){
      return  getNewArray[1]
 }
 console.log(secondValueOFArray(newArray));
 


 function secondValueOFArray1(getNewArray){
      return  getNewArray[1]
 }
 console.log(secondValueOFArray1([200,300,500,1000]));