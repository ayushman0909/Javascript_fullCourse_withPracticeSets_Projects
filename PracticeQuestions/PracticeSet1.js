//Q-1


console.log(typeof null); //output ? ans-Object


//Q-2

console.log(typeof undefined); // undefined


//Q-3

console.log("2" + 1); // 21


//Q-4


console.log("2" + 1 + 3); //213  beacuse any operation take two first in this first is "2" and second is 1 ,first detected as string then js automatically convert 1 to "1" and it gives output as "21" and then same later with 3 ,"21"+3


//Q-5


console.log(2 + 1 + "3"); // here 2+1=3 then 3 +"3" again 33 ,IMPORTANT when + is there and any of one is string then it second one will get converted to string and get concated no matter weather string can also be converted to number but in case of + it always converted to string


//Q-6

console.log(null > 0); //false because 0 is a valid number and js convert null to 0 in case of comparision

// Q-7

console.log(null >= 0); //true 


//Q-8

console.log(null==0) //false beacuse in case of == js convert null into undefined


//Q-9
console.log(null==undefined); //true

//Q-10

console.log(undefined === null); //false because === matches datatype also null is object datatype and undefined is undefiend datatype


//Q-11

let x = 5;
let y = x++;
console.log(y, x);

// here y get the value of x which is 5 then ++ operation performs and x gets value 6


//Q-12

let x2 = 5;
let y2 = ++x2;
console.log(y2, x2); // here y get the value of x with increment whichis 6 then x will also get 6 

//Q-13


//stack memory-it is a type of memory which works on premitive datatypes(string ,number,boolean,undefined,null) and takes a copy of variable so that any modification in new variable do not chnage the original one

//heap memory -it is a type of memory which works on non-premitive datatypes(objects ,arrays,functions) and do not takes  a copy of variable so that any modification in new variable do  change the original one


//Q-14

const arr = [1,2,3];
const arr2 = arr;
arr2[0] = 100;
console.log(arr); // 100,2,3 because it works on heap memory concept


//Q-15

let a = "hello";
let b = a;
b = "world";
console.log(a); // hello because it works on stack memory concept

//Q-16

console.log(Boolean("")); // false empty string is considered as falsy value in js

//Q-17
console.log(Boolean("Ayush")); //true

//Q-18

console.log(Number("45abc")); //NaN not a number

//Q-19

console.log(Number(null)); // null get converted to 0

//Q-20
console.log(Number(undefined)); //NaN

//Q-21

console.log(Array.isArray([])); //true Array.isArray checks weather the () inside one is array or not here is a empty array []

//Q-22

console.log(Array.from("Ayush")); // it convert each letter into a elements of array ["A","y","u","s","h"]

//Q-23

console.log(Array.from({name:"Ayush"})); // object is not itteratable so [] is returned

//Q-24

// slice 

const arr1=[1,2,4,5,6,7,8,9];

const newarr1=arr1.slice(2,4);

console.log(arr1); // slice do not change original array 
console.log(newarr1); // slice only change copied array  last 4th is excluded here prin only till 3rd index element


// splice 

let arr3 = [1,2,3,4,5];

let result = arr3.splice(1,2);

console.log(result);
console.log(arr3); // splice also change the original one and one more thing the part which is extacted by result is no more longer exists in arr3



// Q-25

const arr4 = [1,2,3,4];
console.log(`25th question ${arr4.slice(1,3)}`); //2,3

//Q-26
// array.splice(start, deleteCount, itemsToAdd)
const arr5 = [1,2,3,4];
console.log(arr5.splice(1,2)); //2,3
console.log(arr5);  // [1,4]


//Q-27

let arr6=[1,2,3,4,5,6,7,8,9,10,11,12];
arr6.splice(2,0,13,14); //starts with 2nd index after that 0 means delete 0 items and after add 13 and 14 after the 2nd index
console.log(arr6);

arr6.splice(2,2);
console.log(arr6); // again back to normal

//Q-28


console.log(Math.floor(Math.random()*10)+1); // number between 1 to 10


//Q-29

// Difference between:

// trim()
// replace()

//trim
const name="   ayush kumar  " 
console.log(name.trim()); // it remove spaces from start and end not between

// replace

let name2="kittu kumar"
let newname2=name2.replace("kittu","ayush") 
console.log(newname2);



//Q-30

const str = "Ayushman";
console.log(str.slice(-8,3)); //Ayu because in slice if we place - then it reset to 0 and 3rd is excluded









