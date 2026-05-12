const user={

    name:"ayush",
    age:30,
    message:function(){
        console.log(`${this.name} welcome to the era of coding`); // jab bhi hame kisi object ke andar hi uske kisi key ko use karna ho to this ka use karte hai but yaad rahe this is only acceptable in function only which is inside object
        console.log(this); // full object will get printed
        
        
        
    }
}

user.message();
console.log(this); // an empty object in node.js but when in brower it will show window object which is global

