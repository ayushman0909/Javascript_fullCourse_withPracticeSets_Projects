// indirectly all the datatypes of js is a object weather it is array string function etc

function Sum(a) {
  return Math.pow(a, 3);
}
// console.log(Sum(5));

// Sum.fullname="ayush"; // this is . means object which shows function act like object

// console.log(Sum.fullname);

// now we need to create one method which tell us the actualllength of string by removing the extra spaces

const name = "ayushman      "; // it is 8 letter but due to space ites length is more than actual

// console.log(name.length); // 14 (8 letter +6 spaces);

// we can do it by the predefined method like name.trim().length but for knowlege we need to create one method which applies on every string which we create
// trueLength

// if we want that every datatype should have method by default then we use inject this directly to object because every datatype are wrapped with a object

Object.prototype.trueLength = function () {
  return `the actual length is ${this.trim().length}`;
};

// console.log(name.trueLength());

// now this function can be accessed by all datatype beacuse it is getting injected to top layer which is object

// Array    |
// Function | ------------> Object---------->Null
// String   |

//Inheritence

const Teacher = {
  name: "kittu",
  makeVid: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TaSupport = {
  makeAssignment: "asssignment",
  fullTime: true,
  teach:Teacher
};

// now if we want to share the featues of teaher with Rasupport just add __proto__

console.log(TaSupport.teach.makeVid); 


// const TaSupport2 = {
//   makeAssignment: "asssignment",
//   fullTime: true,
//   __proto__:Teacher
// };

// console.log(TaSupport2.name);  // no need to write TaSupport.__proto__.name it get directly injected to this which is known as inheritence


// latest approach
const TaSupport2 = {
   makeAssignment: "asssignment",
   fullTime: true}

Object.setPrototypeOf(TaSupport2,Teacher);
console.log(TaSupport2.name);  // no need to write TaSupport.__proto__.name it get directly injected to this which is known as inheritence
