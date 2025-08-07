// +++++++++++++++++++++...... This  keyword use case..... ++++++++++++++++++

const user ={
    username:"shyam",
    price:999,

    welcomeMessage :function(){
        // console.log(`${this.username} ,welcome.........`);
        // console.log(this); all current contex hold 
        
        

    }
}
// welcomeMessage() error show ..not define
// user.welcomeMessage()
// user.username="sujoy"
// user.welcomeMessage()
// console.log(user);
// console.log(this); // {}  - empty , global no context here in code 


// +++++++++++++++++++++++++  New  +++++++++++++++++++++++++
// when this keyword use in function inside represent a global object . but upper case not
// function chai(){
//         console.log(this);
        
// }
// chai()



// function chai(){
//        let userName="shyam"
//         console.log(this.userName); //undefined
        
// }
// chai()



// const chai = function(){
//        let userName="shyam"
//         console.log(this.userName); //undefined
        
// }
// chai()



//................................Arrow function...............
const chai=() => {
       let userName="shyam"
        //console.log(this); //{}
        // console.log(this.userName); //undefined
        
}
chai()


// ...........................Explicit Return............................
// curly backet means return must 

// const addTwo=(num1,num2) => {
//      return num1+num2
// }
// console.log(addTwo(5,8));


// ...........................Implicite Return ............
// no curly backet no retrun

// const addTwo= (num1,num2) =>  (num1+num2)
// console.log(addTwo(5,8)); //13

// const addTwo= (num1,num2) =>  {usernames:"shyam"}
// console.log(addTwo(5,8)); // undefined username 
                                // we need to a paranthicss



const addTwo= (num1,num2) =>  ({usernames:"shyam"})
console.log(addTwo(5,8));  // { usernames: 'shyam' }


