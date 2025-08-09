// For 

for (let i = 0; i <= 5; i++) {
    const element =i ;
    if (element==5) {
        // console.log("5 is the best number");
        
    }
    // console.log(element);
    
}



for (let i = 0; i <=5; i++) {
    //  console.log(`Outer loop value :${i}`);
       

    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i+ '*' +j+ '=' +i*j);
        
        
        
    }
    
}


let myArray = ["flash", "badman", "saktiman" , "spiderman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}



// Break and Continue..............


// for (let index = 1; index <= 20; index++) {
//     console.log();
//     if (index==5) {
//         console.log("find the best number in 20" ,`the value is  ${index}`)
//         break
//     }
//     console.log("value of i is ...",index);
    
// }



for (let index = 1; index <= 20; index++) {
    
    if (index==5) {
        console.log("find the best number in 20" ,`the value is  ${index}`)
       continue
    }
    console.log("value of i is ...",index);
    
}