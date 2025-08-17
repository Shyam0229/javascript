// reduce//

const myNums= [1,2,3]

// const myTotal = myNums.reduce( function(acc,curval) {
//     console.log(`accumulator ${acc} and currentvalue ${curval}`);
    
//     return acc+curval
// },0)


const myTotal =myNums.reduce( (acc,curval ) => {return acc+curval },0 )

// console.log(myTotal);


const shopingCart =[
    {
      itemname :'js course',
      price : 2999
    },
    {
      itemname :'py course',
      price : 999
    },
    {
      itemname :'java course',
      price : 36999
    },
    {
      itemname :'mob dev course',
      price : 5999
    },
]

const TotalShopingPrice = shopingCart.reduce( (acc,item ) => {return acc + item.price },0 )
console.log(TotalShopingPrice);
 