let score="45"; //it is string with inside some number and it can be easily converted to number

let score2="35abc";// it is a string with inside some mix of number and letter if we try to convert this then it will conver succesfully but when we print the exact value after conversion it will print NaN means not a number

let score3=null; // in this case when we print the typeof score3 it will print object and after converting it to number if we print it it will print 0


let score4=undefined; // it will print NaN after conversion

let score5=true;



//console.log(score,score2,score3,score4,score5) // score=45 score2=35abc score3= null score4=undefined score5=true

//console.log(typeof score,typeof score2,typeof score3,typeof score4,typeof score5); //string,string,object,undefined,boolean


let scoreValueInNumber= Number(score);
let score2ValueInNumber= Number(score2);
let score3ValueInNumber= Number(score3);
let score4ValueInNumber= Number(score4);
let score5ValueInNumber= Number(score5);
 
//console.log(typeof scoreValueInNumber,typeof score2ValueInNumber,typeof score3ValueInNumber,typeof score4ValueInNumber,typeof score5ValueInNumber); //all get converted to number

//console.log(scoreValueInNumber,score2ValueInNumber,score3ValueInNumber,score4ValueInNumber,score5ValueInNumber);

 /*scoreValueInNumber=45 ,score2ValueInNumber=NaN ,score3ValueInNumber=0,score4ValueInNumber=NaN ,score5ValueInNumber=1
 */



//boolean


let isloggedin=1;
let booleanIsloggedin=Boolean(isloggedin);
//console.log(booleanIsloggedin);

// 1=>true,0=>false ,""=>false,"anythinghere"=>true


/*
now we talk about operations
*/

// console.log(2+"1"); //21   // this is all due to ECMA rule
// console.log("2"+1); //21
// console.log("2"+"1"); //21
// console.log("2"+1+3); //213
// console.log(2+1+"3"); //33


// let counter=100;
// ++counter;
// console.log(counter);


let x=2
let y=x++;
console.log(y);
console.log(x); // in postfix first the value of x 2 is given to y which is y=2 and x get increaded to 3



let x2=2;
let y2=++x2;
console.log(y2); // in prefix first the vlue of x=2 is given to y but at the time of initalisation it become 3 so y=3 and x=3
console.log(x2);






