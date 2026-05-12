//inhetitence using class 


class User{
   constructor(name){
    this.name=name;
   }

}

class Student extends User{

    constructor(name,age,batch){
        super(name)
        this.age=age;
        this.batch=batch;
    }
    addPassword(){
        return `${this.name}abc`
    }
}


const user=new Student("ayush",10,2022)
console.log(user.addPassword());



//same thing using function

function NewUser(name){
  this.name=name;
  console.log(this.name);
  

}

function Teacher(name,email,subject){
    NewUser.call(this,name)
    this.email=email
    this.subject=subject
}

const user2=new Teacher("sakshi",30,"java");

console.log(user2);
