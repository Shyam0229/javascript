const forms = document.querySelector('form')

// this use case will give you empty value
// const Newheight = parseInt(document.querySelector('#height').value)
// const Newweight = parseInt(document.querySelector('#weight').value)

forms.addEventListener("submit",function(e){

   e.preventDefault() // e.preventDefult  means here e -event are stop some time

   const Newheight = parseInt(document.querySelector('#height').value);
   const Newweight = parseInt(document.querySelector('#weight').value);
   const Newresult = document.querySelector('#results')

   if (Newheight === ' ' || Newheight < 0 || isNaN(Newheight)) {

    Newresult.innerHTML =`Please give a valid height ${Newheight}` ;
    
   }

   else if (Newweight === ' ' || Newweight < 0 || isNaN(Newweight)) {

    Newresult.innerHTML =`Please give a valid weight ${Newweight}` ;
    
   }

   else{
      const bmi = (Newweight/((Newheight*Newheight)/1000)).toFixed(2)
         //  show the result
         Newresult.innerHTML=`<span>${bmi}</span>`
   }

   


});