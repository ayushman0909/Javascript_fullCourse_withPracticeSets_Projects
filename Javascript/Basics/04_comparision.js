// console.log(2>1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1); //these are common and we can get either true or false

/*
the problems comes when we compare two different datatypes && this is why most of people use typescript because it does allow these type of comparisions
*/

console.log("2">1); // automatically get convertted to number
console.log(null>0); // null get converted to 0 and 0>0 false
console.log(null<0); //null get converted to 0 and 0<0 false
console.log(null==0); // here special case arrises in == condition null is only equals to undefined 
console.log(null>=0); //null get converted to 0 and 0<=0 true]


console.log(2==2); // only value get compared
console.log(2===2); // both value and datatype get compared






