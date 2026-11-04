// let passengers=[
//     {
//         passengerName:"Anil kumar",
//         age:30,
//         passportNumber:"A1234567"
//     },
//     {
//         passengerName:"Sunil kumar",
//         age:28,
//         passportNumber:"B98765432"
//     }
// ]
// // console.log(`first passenger name:${passengers[0].passengerName}`)
// // console.log(`second passenger name${passengers[1].passengerName}`)

// for (let i=0;i<passengers.length;i++){
//     console.log(`passenger ${i+1} Name-${passengers[i].passengerName}, age-${passengers[i].age}, passportNumber-${passengers[i].passportNumber}`)
// }

// const data=[
// { name: 'Anil Kumar', age: 30, passportNumber: 'A1234567' },
// { name: 'Sunil Kumar', age: 28, passportNumber: 'B9876543' }
// ];
// const singleData={ name: 'Ramesh Kumar', age: 35, passportNumber: 'C4567890' };

// const displayObjects=()=>{
//     if (Array.isArray(data)){
//         for (let d of data){
//             console.log(d)
//         }
//     }
// }
// displayObjects(data)

function divide(a,b){
    if (b===0){
        throw new Error("Division with zero is not possible")
    }
    return a/b

}
console.log(divide(1,1))