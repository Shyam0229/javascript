const clocks =document.getElementById('clock')
// const clocks = document.querySelector('#clock)

// let date =new Date();
// console.log(date.toLocaleTimeString());

// this is used in console part in browser console


setInterval(function(){
   let date = new Date();
   clocks.innerHTML = date.toLocaleTimeString();

},1000);


