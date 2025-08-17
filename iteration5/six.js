const programming=['js','cpp','py','java','php']
const values = programming.forEach( ( item) => {
        // console.log(item);
        
} )
// console.log(values);
// not any values return in foreach loop



// filter using we return any valuse 

// const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newmyNum =myNum.filter( (num ) => {return num>4}  )
// console.log(newmyNum);

const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newmyNum =myNum.filter( (num ) =>  num>4  )
// console.log(newmyNum);


// ..............+++++++++++++++.............+++++++++++//
// const num=[1,2,3,4,5,6,7,8,9,10]
// const newNum=[]
// num.forEach( (value ) => { 
//     if (value > 5) {
//         newNum.push(value)
//     }
// })
// console.log(newNum);










const books=[
    {
        tittle:'book one',
        sub:'bengali',
        published:1987,
        edition:2000
    },
    {
        tittle:'book two',
        sub:'english',
        published:1987,
        edition:2004
    },
    {
        tittle:'book three',
        sub:'bengali',
        published:1907,
        edition:2004
    },
    {
        tittle:'book four',
        sub:'math',
        published:1987,
        edition:2001
    },
    {
        tittle:'book five',
        sub:'science',
        published:1900,
        edition:2000
    },
    {
        tittle:'book six',
        sub:'geography',
        published:1957,
        edition:1980
    },
    {
        tittle:'book seven',
        sub:'bengali',
        published:1900,
        edition:1987
    },
    {
        tittle:'book eight',
        sub:'english',
        published:1995,
        edition:2000
    },
    {
        tittle:'book nine',
        sub:'math',
        published:1987,
        edition:2000
    },
    {
        tittle:'book ten',
        sub:'sciencs',
        published:1987,
        edition:2000
    },
]

let newBooks=books.filter( ( bk) => bk.sub==='english')
 newBooks =books.filter((bk)=>{
    return bk.edition >= 2000 && bk.sub === 'bengali'
})
console.log(newBooks);
