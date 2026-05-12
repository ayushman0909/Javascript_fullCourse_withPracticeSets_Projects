// const user=new Object() //singleton object
const user={} // non singleton object 
user.id="abc123",
user.name="kittu",
user.isloggedin=false

// console.log(user);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}

// const obj3=Object.assign(obj1,obj2);
// console.log(obj3);
// console.log(obj1); // it also changed 

//if we need that the original one should not change then we will have to do this

const obj3=Object.assign({},obj1,obj2); // first bracket act as target where all the object will go 
// console.log(obj3);
// console.log(obj1); 


// and the best way we will do this 

const obj4={...obj1,...obj2};
// console.log(obj4);
// console.log(obj1); // do not change the original one


// console.log(Object.keys(obj3)[1]); .key will convert all the keys into array





