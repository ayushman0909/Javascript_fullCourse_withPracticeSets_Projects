//arrow function

const sum=(a,b)=>{
return a+b;

}

console.log(sum(1,2));


//difference between normal function adn arrow function 
//difference no 1- behaviour of this
const user={
    name:"kittu",
    age:19,
    welcome:function(){
        console.log(this); // in normal function it take this as all the keys and values inside object 
         
    }
}
// user.welcome();

const user2={
    name:"kittu",
    age:19,
    welcome:()=>{
        console.log(this); // in arrow function  it take this as parent's this value which is undefined or {} in node and in brower it will print window scopes 
         
    }
}
// user2.welcome();
 

//second difference- normal function do hoisting means if we declare function call before initialisation it willl internally move the declaration above the calling but not in arrow function 

// normal(); // it is ok
function normal(){
console.log("hello kittu");



}



// arrowfunction(); // not ok error cant use before initialising
const arrowfunction=()=>{
console.log("hello kittu");

}

// third difference-arguments are present in normal function but not in arrow function

function test() {
  console.log(arguments);
}
// test(1,2,3);


const test2=()=> {
  console.log(arguments); 
}
// test2(1,2,3);

//type of ways to declare arrow function 

const name1=()=> {
  return "kittu"
}

const name2=()=>( console.log("kittu")); // implesit return do not write return

// if ned to return object then
const name3=()=>( {user:"kittu"}); // object return
