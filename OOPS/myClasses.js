//ES6

class StudentDetails{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    addSurname(){
        return `${this.name} kumar`
    }
    addPassword(){
        return `${this.age}abc`
    }

}

const user1=new StudentDetails("kittu",20,"male");


// console.log(user1.addPassword());




//now same things using function 

function StudDetails(name,age,gender){
 this.name=name;
 this.age=age;
 this.gender=gender;

}

StudDetails.prototype.addSurname=function(){
    return `${this.name} kumar`
}
StudDetails.prototype.addPassword=function(){
    return `${this.age}abc`
}

const user2=new StudDetails("ayush",30,"male")

console.log(user2.addPassword());

