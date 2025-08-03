const mydate= new Date()
// console.log(mydate);

// console.log(mydate.toString());  //Sun Aug 03 2025 11:13:39 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());//Sun Aug 03 2025
// console.log(mydate.toJSON());  //2025-08-03T11:13:39.182Z
// console.log(mydate.toLocaleString()); // 8/3/2025, 11:13:39 AM

// console.log(typeof mydate); //object

// const crtdate=new Date(2025,7,3)
// console.log(crtdate.toDateString());  //Sun Aug 03 2025 ,,coverting date into specific time format

const crtdate=new Date("2025-8-3")
// console.log(crtdate); //2025-08-03T00:00:00.000Z

let mytimestamp=Date.now()
// console.log(mytimestamp); // 1754221479042 this valu are mili second

let crtdate1=new Date("2025-8-4")
// console.log(crtdate1); //2025-08-04T00:00:00.000Z
// console.log(crtdate1.getTime())  // its is mili second 

// this two value are comapre and get parfecting ,,like who enter first

// console.log(Math.floor(Date.now()/1000)) // this is a convert into second



let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth()); // 7 means augest ,here index st with a  0
console.log(newdate.getDay()); // 0 means sunday

newdate.toLocaleString('defult',{
    weekday:"long"
})
// tolocalstring all ways send time very long format 
// we customize this format for short and long and medium


