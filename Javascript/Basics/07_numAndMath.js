const num=100; // js will automaticlly detect it as number
const num1=new Number(100); // differenece you can see in console of browswer 

// console.log(num.toFixed(2)); // fixed to 2 decimal places

const StrConvert=num1.toString();
// console.log(StrConvert.length); // acts as a string now so all properties of scring can be applied here

const othernum=23.9654
// console.log(othernum.toPrecision(3));




//++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++

// console.log(Math); // run in console
// console.log(Math.abs(-4)); // it convert negative integer to positive but not positive to negative positiv remain same=>4
// console.log(Math.round(4.34)); // round off to 4 if 4.6 rount of to 5
// console.log(Math.ceil(4.2)); // it will round of to the big one means if 4.2 then 5
// console.log(Math.floor(4.9)); // it will round of to the small one means if 4.9then 4
// console.log(Math.min(4,9,1,5)); // it will give 1
// console.log(Math.max(4,9,1,5)); // it will give 9

// console.log(Math.random()); // 0-1 range 
// console.log(Math.random()*10); // 0-10 range 
// console.log((Math.random()*10)+1); // 1-10 range 


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)+min)); // range decide between 10 and 20 





