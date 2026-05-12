function functionName(){ // defination
console.log("ayush");

}


// functionName(); //function call



// function add(a,b){   // at time of defination a and b is parameters
//     console.log(a+b);
    
// }

//  const result=add(1,2); // at time of calling a b is arguments and when we print result it will print undeifned because inside function we are consoling not returning anything



function LoginMessage(username="kittu"){ // defuult kittu and is we not set anu defualt we will see undefined if no name is sent here
    return `${username} just logged in`
}

const message=LoginMessage("akhilesh");
// console.log(message);




// Rest and Spread operators are same ... but usecase is another

function priceToCart(...num1){  // it is rest operator
    return num1
}

console.log(priceToCart(200,300,400)); // gives an array with[200,300,400];

