// let  a=10
// const b=20 
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);


// .....Global of Scope......
// var c=300

// .....Block of Scope...
// if(true){
//     let a=10
//     const b=20
//     var c=30 
// }

// console.log(a); //not access
// console.log(b); //not access
// console.log(c); // var accessable 30





// let a=300
// if (true) {
//     let a=20
//     const b= 40
//     console.log("inner value of a",a);
    
// }
// console.log("outer value of a ",a);


//.........Nested Function.........

function one(){
    userName="shyam"

    function two(){
        const website="google.com"
        console.log(userName);
        
    }
    // console.log(website);
    two()

}
// one()



if (true){
    const userName="shyam"
    if(userName==="shyam"){
        const website=" youtube"
        // console.log(userName + website);
        
    } 
    // console.log(website);
    
}
// console.log(userName);


// ...............new something..............

console.log(addOne(5));  // function declaraton befroe call
 function addOne(num){
    return num+1
}




//  Cannot access 'addTwo' before initialization
addTwo(5)              // veriable thorugh call ,find error this is a hoisting
const addTwo =function(num){
    return num+2
}