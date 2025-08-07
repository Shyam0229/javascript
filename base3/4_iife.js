//++++++++++++++++++++ Immediately Invoked Function Expression ++++++++++++++++++//


// function chai(){
//     console.log("DataBase ConnecTed...");
    
// }
// chai()



// function chai(){
//     console.log("DataBase ConnecTed...");
    
// }
// ()  // this is wrong process we need to ---() paranthices



// (function chai(){
//     console.log("DataBase ConnecTed...");
    
// })
// (); // in paranthices () so run  ......DataBase ConnecTed...


// ()()
// 1st ()--function defination 
// 2nd()--function excution



// (function code(){
//     console.log("DataBase ConnecTed...2nd time");
    
// })
// ()
// this eroor becuse , before iife need to semicolon(;) stop the 1st one iife excution
    //  like this --1st iife  ()();      so next iife     ()()



    // now one new iife using arrow function //

    (   (name) => {
           console.log(`DataBase ConnecTed ${name}...3rd time`);
         }    
    )
(`shyam`)