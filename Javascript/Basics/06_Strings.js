// `` used for template literals this allows String interpolation(${} values)

const name1="Ayushman";
const name2=new String("Kittu"); // both act same

// console.log(name2.__proto__);
// console.log(name2.length);
// console.log(name2.toLocaleUpperCase());


const newname=name1.slice(0,2); // last index not included ,means only Ay here we can give negative number here if we write substring(5,2) =>it will not get swapped as substring(2,5) =>""

const anothername2=name1.slice(3,10); // if we exceed the last one greater than the length it will print from 3rd to end shman   

const anothername3=name1.slice(-8,3);
/*
 A  Y  U  S  H  M  A  N
 0  1  2  3  4  5  6  7
-8 -7 -6 -5 -4 -3 -2 -1
*/

// console.log(anothername3);

const newname2=name1.substring(-7,2); //same but here we cannot give negative number every negative number is treated as 0th index  here if we write substring(5,2) =>it will automatically get swapped as substring(2,5)
// console.log(newname);
// console.log(newname2);



/*
 Trim and Replace
*/

const scam="  scam  "
const afterTrim= scam.trim();
// console.log(scam);

// console.log(afterTrim);


const url="https://google.com%20Ayushman"
const updatedurl=url.replace("%20"," ");
const check=updatedurl.includes("Ayam");
// console.log(check); //false

// console.log(url);

// console.log(updatedurl);


/*
converting sting into array
*/

const Str="ayushman,lak,ayush,kittu";
// console.log(Str.split(",",2)); // only ["ayushman","lak"]
// console.log(Str.split(",")); //  ["ayushman","lak","ayush","kittu"]

