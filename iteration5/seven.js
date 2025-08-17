const num=[1,2,3,4,5,6,7,8,9,10]
// const newNUMS=num.map((number)=>{return number+10})

const newNUMS = num
                  .map((number ) => {return number*10 })
                  .map(( number) => {return number+1 })
                  .filter( (number ) => {return number >= 40 })

console.log(newNUMS);
