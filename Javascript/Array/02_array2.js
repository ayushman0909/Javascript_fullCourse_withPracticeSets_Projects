const india=["hardik","abhishek","bumrah"];
const westindeas=["russel","pollard","bravo"];
// const updatedteam=india.push(westindeas); // it will give count as 4 beacuse ["","","",["","",""]];
// console.log(updatedteam); // it will give count as 4 beacuse ["","","",["","",""]];
// console.log(india); // this will get updated as india=["","","",["","",""]]; not editing on copy editing on original one
// console.log(westindeas); // remains same


const concatedone=india.concat(westindeas); // this concat method creates copy so the original one will not change the copy one will change
// console.log(concatedone); // array will become both with 6 entries



// raher than this we use updated method spread ... to combine 

const new_array=[...india,...westindeas];
// console.log(new_array);

// one more interenting concept Flat

const arr=[1,2,3,[4,5,6],7,[6,7,8,[9,10,11]]];
const newarr=arr.flat(3) // 3 is the number of depth kine adar tak mujhe usko flat krna hai 
// console.log(newarr); //[  1, 2, 3, 4, 5,  6, 7, 6, 7, 8, 9, 10, 11]


// check weather the variable is array or not

const check=Array.isArray(arr);
console.log(check);


// convert into array
console.log(Array.from(newarr));
console.log(Array.from({name:"ayushman"})); // it will not accept it will return an empty array





