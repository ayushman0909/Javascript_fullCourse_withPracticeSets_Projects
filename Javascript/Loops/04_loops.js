// filter,map,reduce 
const arr=[1,2,3,4,5,6,7,8];

const newarr=arr.filter((item)=>item>4);
// console.log(arr); // it does not change the original array because copy of the array is getting created

// console.log(newarr);

const newarray=arr.map((item)=>{
//    return item+10
    
});
// console.log(arr); // it also return a copy so no changes in original one

//  console.log(newarray);


const a=[1,2,3,4]

const total=a.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
console.log(total);










