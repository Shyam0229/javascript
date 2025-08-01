// .................PRIMITIVE OR CALL BY VALUE.......
// HERE VALUE ARE COPY AND PASTE SOME WHERE IN CHANGE THE VARIABLE NUMBER 
    // 7 TYPES OF 
        // 1. STRING - "ABC"
        // 2. NUMBER - 12
        // 3. BOOLEAN - TRUE OR FALSE
        // 4. NULL -EMPTY,NOT EMPTY STRING ,NOT ZERO
        // 5. BIGINT - HUGE NUMBER LIKE ,1244558754151n
        // 6. UNDEFINE -VERIABEL DECLEARED NOT VALUE SET ,MEMORY,AND SPACE CREATE 
        // 7. SYMBOL -UNIQUE VALUE ATTECHED ,,SO MANY SAME VALUE USING 

 
   const temp =null
   let emailAddress=undefined 
   
   console.log(typeof temp);   // "object"
   console.log(typeof emailAddress); // "undefined"
   

   const id =Symbol('123')
   const anotherId = Symbol('123')

   console.log(typeof id); // "symbol"
   console.log(typeof anotherId); // "symbol"
   
   
//    console.log(id===anotherId);
//    value will be same but Symbol denotes a unique value which is id and anotherId
   

 const BigNumber = 1231564561357892323535636535353n
//  console.log(typeof BigNumber);
 









// ..................NON PRIMITIVE OR CALL BY REFERENCE.......
// HERE ADDRESS WILL BE COPY AND VALUE WILL BE SAVE 
        // MAINLY 3 TYPES
            // 1. ARRAY -
            // 2. OBJECT 
            // 3. FUNCTION  




      const heros =["shyam","kumar","malik"] 

     console.log(typeof heros);   // "object"
     
      
      let obj1 = {
        name :"shyam",
        age:20
      }
   

      console.log(typeof obj1); // "object"
      

 const  myfunction = function() {
    // console.log("hello world ");
    
    
}
console.log(typeof myfunction); // "object function "