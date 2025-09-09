const buttons = document.querySelectorAll('.button')
const bodys= document.querySelector('body')


buttons.forEach(function (newButton) {
    console.log(newButton);
    newButton.addEventListener("click" ,function (e) {
        console.log(e);
        console.log(e.target);

        if (e.target.id==='grey') {

            bodys.style.backgroundColor= e.target.id 
            
        }  

        if (e.target.id==='white') {

            bodys.style.backgroundColor= e.target.id 
            
        }  

        if (e.target.id==='yellow') {

            bodys.style.backgroundColor= e.target.id 
            
        }  
        
        if (e.target.id==='blue') {

            bodys.style.backgroundColor= e.target.id 
            
        } 

        if (e.target.id==='purple') {

            bodys.style.backgroundColor= e.target.id 
            
        }  
        
        
    })
    
})