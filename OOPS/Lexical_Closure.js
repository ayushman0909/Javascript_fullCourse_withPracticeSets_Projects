// this is lexical scoping which means inner function have the excess of outer function variables but inner dont have

function init() {
  var name = "Mozilla";
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// closure

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
// here we can see if we return displayname which is the reference of function ,it doesnot means that it will only return the displayfunction ,it returns whole function which exist outer also,

// agar outer function share nhi hua to error aa jayga kyuki name to outer me hai ,this functionality is known as closure