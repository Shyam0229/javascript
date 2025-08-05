// singletone
// const tinderUser={}  empty object
const tinderUser= new Object                      

// console.log(tinderUser); // {}


 tinderUser.id=123
tinderUser.email="xyz@gmail.com" 
tinderUser.islogin =false
// console.log(tinderUser); //{ email: 'xyz@gmail.com', islogin: false }
// { email: 'xyz@gmail.com', islogin: false }




const regularUser={
    email:"xyz@gmail.com",
    fullname:{
        userfullname:{

            firstname:"shyam",
            secondname:"kumar",
            lastname:"malik"
        },
    },
    age:18
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname);


// ........................join to object.........

const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"d",
    5:"e",
    6:"f"
}
// const obj3={obj1,obj2}
// console.log(obj3);
                //  {
                //     obj1: { '1': 'a', '2': 'b', '3': 'c' },
                //     obj2: { '4': 'd', '5': 'e', '6': 'f' }
                //   }

// const obj4=Object.assign(obj1,obj2) 
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

                    //same result but down is the bset way

// const obj4=Object.assign({},obj1,obj2)  // this is the best way 
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
    

const obj5={...obj1,...obj2}
// console.log(obj5);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //tinderuser keys find
console.log(Object.values(tinderUser)); //tinderuser valuse find

console.log(tinderUser.hasOwnProperty('islogin')); //true ,,
//                                     in object .find the keys have or have not

