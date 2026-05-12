
// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);  // we cannot override its value but it is not impossible



const pi=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(pi); //here you will the propety that is not writable 

// let us create on object 

const user={
    name:"ayush",
    age:20
}

const userNameProperty=Object.getOwnPropertyDescriptor(user,"name"); 
console.log(userNameProperty);
console.log(user);

//not i have to change the descriptor property of the object which is made by us 

Object.defineProperty(user,"name",{writable:false}) // by drfault property of all object which is declared by user are true 
console.log(Object.getOwnPropertyDescriptor(user,"name")); 
user.name="kittu"
console.log(user); // not name do not get change to kittu

