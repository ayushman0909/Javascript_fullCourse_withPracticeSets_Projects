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
console.log(str.slice(-8,3)); // here -8 means starting from end n is -1 so the -8 isA

//Q-31
const str2="kitu";
console.log(str2.substring(-5,2)); // in case of substring it do not support - so it get 0

//Q-32

 console.log("Ayush".split("")); //["A","y","u","s","h"] nothing inside "" means split each 

 //Q-33
 console.log([1,2,3].join()); // 1,2,3 join convert each element of array into string and by default seperated by ,

 //Q-34

 console.log(typeof []); //object
 console.log(typeof {}); // object
 console.log(typeof function(){}); //function 

//Q-35

// Hoisting means:

// JavaScript moves declarations to the top before execution.

// console.log(a); it will give undefined 
// let a=10;
// because internally js is seeing this like 
// let a; 
// console.log(a);
// a=10;



//Q-36
console.log(s);
var s = 10; // undefined same upper one logic

//Q-37

//Explain temporal dead zone.

//The time between variable hoisting and variable initialization where the variable cannot be accessed.



//Q-38

{
  let num = 10;
}
// console.log(num); // block scope cannot be used outside scope


//Q-39
if(true){
   var num2 = 100;
}
console.log(num2); // var do not follow scope can be able to use 

//Q-40


const t=[1,2];
t.push(3);
console.log(t); //[1,2,3] because it follows heap memory concept operation peroforms on original array


//Q-41

const obj = {
  name:"Ayush"
}
obj.name="Kittu";
console.log(obj); // {name:"kittu"} // same heap memory concept


//Q-42

console.log(typeof NaN); // number

//Q-43

// Explain:

// truthy values
// falsy values

//Q-44

// Difference between:

// function declaration

sum()
function sum(){
    console.log("hello");
    
}
// it is fullly hoisted and print hello declaration goes on top 

// but function expression

// when function stored in variable
// sum2()
const sum2=function(){
    console.log("hello");
    
} 
//error because it do not suppport hoisting

//Q-45

hello();

function hello(){
 console.log("hello");
}   // hello same soncept of function declation


//Q-46

// Difference between:

// normal function
// arrow function

//Normal function 

// it has its own this 
// it supports hoisting features

// arrow function 

// it has not its own this .using this efers to window object
// it do not supports hoisting features


//Q-47

function outer(){
 let name="Ayush";

 function inner(){
   console.log(name);
 }

 return inner;
}

outer()(); // Immediately Invoked Function Expressions(IIFE) it get excuted automatically when saved

//Q-48
// Difference between: 
// rest operator
// spread operator

// rest operator
function AllNum(...numbers){
   console.log(numbers);
}

AllNum(1,2,3,4); // 1 2 3 4 

//spread 

let g = [1,2,3];

console.log(...g);  //1 2 3


let f=[...g,4,5];
console.log(f);//[1,2,3,4,5]


//Q-49




