const arr=[1,2,3,4,5,6];

const arr2=new Array(1,2,3,4,5); //both same

// console.log(typeof arr); //both object
// console.log(typeof arr2);


// const newarr1=arr;
// newarr1[0]=4;
// console.log(newarr1);
// console.log(arr); // both get change because it follows shallow copies rule in which if we change the newar1 element it will change the original array as well which is arr because both referencing same array
// // not making copy


// const newarr2=arr2;
// newarr2[0]=8;
// console.log(newarr2);
// console.log(arr2); // here also same



// Array Methods

// const myarr=[0,1,2,3,4,5,6];
// myarr.push(7);
// myarr.push(8);
// myarr.pop(); // this will pop the last one no need of any arguments

// myarr.unshift(1); // it will add 1 to first and shift all the element with 1 index
// myarr.shift(); // it will remove the first index element

// console.log(myarr)
// // console.log(myarr.includes(6));
// // console.log(myarr.indexOf(6));

// console.log(myarr.join()); // it convert our array to String Data type and also bind them with ,

// console.log(myarr.join().split(",")); // agasin split convert the string to array

// Slice and Splice
 const myarr=[0,1,2,3,4,5,6];
 const mynewarr=myarr.slice(1,4); // it create copy of a part of array so orginal array is not changing only copied one get changed and one more it do not include the last range means 1 to 3 only  
 
 console.log(mynewarr);
 console.log(myarr);


 const newarr1=myarr.splice(1,4); // it do not create a copy of array it remove the seclected range element from the original array and the orignial array get changed and one more it also inclue the last range means 1 to 4  
 console.log(newarr1);
 console.log(myarr);  
 
 


 



