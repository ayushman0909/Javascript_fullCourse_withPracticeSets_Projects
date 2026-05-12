// console.log("scopes");
// let b=200; // global scope

if(true){
   let a=300    // this is block scope
}



//let us understand one example jo inner hai wo outer se le sakta hai but outer inner se nahi
let c=100;
function one(){
    console.log(c);
    const name="kittu"
    function two(){
        console.log(name);
        const secondname="kumar"
        function three(){
            console.log(name);
            
        } 
        three()
    }
    // console.log(secondname); // this cannot be done beacuse ye bare wale scope hai to wo chote me se nahi le skta hai
    
    two();
    
}
// two(); // two annot be excuted outside (function one) block
// one();


// this is nothing but called as Closer in js i.e child function can access the element from parent function




// Now one interestion point


// function add(num){
//     return num+1;

// }
// add(5)


// const sum=function(num){       // if we store any function in a variable then it is called as Expression 

//     return num+1;  
// }
// sum(5)



// both are the way of declaring function but the difference is that when we call the normal function before initialising then also it is called but it throws an error in casse of expression function


// add(5)
// function add(num){
//     return num+1;     // this will run okay

// }


// sum(5)
// const sum=function(num){       //this will throw an error that sum cannot be used befor initialising

//     return num+1;  
// }




// hoisting
// Hoisting JavaScript ka ek behavior hai jisme variables aur functions ko code execute hone se pehle top par “move” kar diya jata hai (memory me).

console.log(a); // undefined
var a = 10;

//upper wale ko  Internally JS  aise samajhta hai:
var a;          // declaration hoisted
console.log(a); // undefined
a = 10;         // assignment baad me hota hai