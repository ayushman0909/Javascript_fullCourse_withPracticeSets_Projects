// Singleton

//object literals-it is one of the way of declaring object
const js={
    name:"ayushman",
    age:20,
    location:"bihar",
    email:"kittu@gmail.com",
    isloggedin:true,
    "full name":"ayushman verma"
}

// how to access
// console.log(js.name);
// console.log(js["name"]); // both are way but why this 
// console.log(js["full name"]); // this cannot be acess by . any way


// now i want to use symbol inside objects

const mysymbol=Symbol("key1");
const js2={
    name:"ayushman",
    age:20,
    [mysymbol]:"mykey1",
    location:"bihar",
    email:"kittu@gmail.com",
    isloggedin:true,
    "full name":"ayushman verma"
}



//function 

js2.congrats=function(){
    console.log("hello");
    
}
// console.log(js2.congrats()); // it will print hello as well as undefined also beacuse inside function if there is no return statement it returns undefined

js2.congratstwo=function(){
   return "hello"
    
}
// console.log(js2.congratstwo()); //works fine now 



// this means what 

const js3={
    name:"ayushman",
    age:20,
    location:"bihar",
    email:"kittu@gmail.com",
    isloggedin:true,
    "full name":"ayushman verma",
}
// now suppose i want to add one more but i want that full name will be the name+surname and name is inside this object only so to retreive all the element of object inside that object only we use this and this can be used only inside function not directly
 
js3.congratsme=function(){
    return `hello ${this.name} verma`
}
console.log(js3.congratsme());


