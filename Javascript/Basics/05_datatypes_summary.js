// premitive -simply we can say it range is fixed
/*
 7 types:-
 1.String
 2.Number
 3.Boolean
 4.null
 5.Undefined
 6.Symbol  used to make any value unique
 7.BigInt
*/
   //JavaScript me variable ka type fix nahi hota — wo runtime pe change ho sakta hai, isliye ye dynamically typed language hai.

// reference type or non premitive datatypes // return type of all non-premetive is object

/*
1.Array
2.Objects
3.Functions
*/




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//memory
/*
1.Stack(Permitive type uses stack )
  .whenever we use any premitive datatype we get a copy of the variable which we have declared

2.Heap(Non-premitive datatype uses it )
  . here we get reference of original one so any change will change the original one 
*/
//example

let myName="ayushman";
let anotherName=myName;

anotherName="kittu";

// console.log(myName);  // here we can see output as ayushman because anotherName got the copy of myName not original one so that any change happens it only happens in the copy one

// console.log(anotherName); // kittu


const user1={
  Name:"kittu",
  upi:"kittu@ybl"
}


let user2=user1;
user2.Name="ayush" // as this is non premitive the original one reference here we get and the moment we chang the second one it also get changed in original one 

console.log(user1)
console.log(user2);


