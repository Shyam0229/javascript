//singletone
// Object.create


//object literals 

const mySym = Symbol("key1")

const mySym1 = Symbol("key2")

const jsUser={
    name:"shyam",
    "full name":"shyam kumar",
    mySym:"mykey1",
    [mySym1]:"mykey1",  // symbol datatype using a -[]- this backet format & access
    age:18,
    location:"kolkata",
    email:"shyam@gmail.com",
    login:true,
    lastlogin:["sunday","monday","wed",]
    
}

//console.log( jsUser.age);    // dot(.) are use in simple key format
//console.log( jsUser["age"]); // now this key are treated as a string format

// console.log(jsUser."full name"); // this is error part not access this way
// console.log(jsUser.full name); // this is error part not access this way
//console.log(jsUser["full name"]); // this key forrmat all ways string format 


// console.log(jsUser.mySym);  // mykey1 , not use here symbol  datatype ,using as a object
// console.log(typeof jsUser.mySym);  // mykey1 , not use here symbol,using as a object ,
//                                   string

// use for symbol data type access
// console.log(jsUser[mySym1]); // not use here (.) 


// how to change value in keys...
Object.freeze(jsUser)  // this using are use to object freeze for no change 
jsUser.email="kumar@gmail.com"
console.log(jsUser);

