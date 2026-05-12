class user{
    constructor(name,age){
  this.name=name;
  this.age=age;

    }
    get name(){
        return `${this._name}ayush`
    }
    set name(newName){
        this._name=newName
    }
}

const stud=new user("ayush",20)
console.log(stud.name);
