//Object Literals

const user={
    username:"kittu",
    loginCount:8,
    signedIn:false,
    sumNum:(a,b)=>{
        console.log(`sum is ${a+b}`);
        
    }
}
// console.log(user["username"]);
// console.log(user.sumNum(1,7));
// console.log(user["sumNum"](1,7));


// this keyword

const user2={
    name:"kittu",
    age:10,
    isValidAge:()=>{
        if(this.age>=18){
            console.log(`${this.name} can vote because his age is ${this.age}`);
            
        }
        else{
            console.log(`${this.name} cannot vote because your is ${this.age} which is less than 18`);
            
        }
    }

}

// console.log(user2.isValidAge());
// this is totally ok but this will print undefined bacause in case of arrow function this as as a global scope not internal object 


const user3={
    name:"kittu",
    age:20,
    isValidAge:function(){
        console.log(this); // this will print this whole object with their key:values
        
        if(this.age>=18){
            console.log(`${this.name} can vote because his age is ${this.age}`);
            
        }
        else{
            console.log(`${this.name} cannot vote because your age is ${this.age} which is less than 18`);
            
        }
    }

}

// console.log(user3.isValidAge());



// constructor function 
// const promise=new Promise();
// const date=new Date()

// here new is th econstructor function it is used to create new instance while creating any variable


function UserDetails(name,age,signedIn){
    this.name=name  // this.name is a global scope this
    this.age=age,
    this.signedIn=signedIn
    return this
}

// let us see what happens when we are not using new 

const userOne=UserDetails("ayushman","20",false);
const userTwo=UserDetails("ayush","10",true);
// console.log(userOne);

// in this when we print this userOne we can see that UserTwo details has overrided because global scope has single instance of every key 

// so for creating new instance for every object we use new
const userthree= new UserDetails("ayushman","20",false);
const userfour=new UserDetails("ayush","10",true);
// three is sepeate and four is seperate

// console.log(userthree instanceof UserDetails); ye check krta hai ki kya userthree UserDetails se naya object unstance bana hai ya nahi 
// console.log(userOne instanceof UserDetails); // false kyuki koi new object instance nahi bana hai is case me 
