// <!-- promise is an object represent eventual completion or failure of any task -->
// for using promises we have to do 1. create promise 2. consume promises

// promise created
const promiseOne = new Promise((resolve, reject) => {
  //Do an Asyc task
  // eg-DB calls,network
  setTimeout(() => {
    console.log("Asyc task is complete");
    resolve();
  }, 1000);
});

//promise Consumed

promiseOne.then(() => {
  console.log("promise Consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("tesk 2 completed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "ayush", age: 20 });
  }, 1000);
});
promiseThree.then((userDetail) => {
  console.log(userDetail);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) {
      resolve({ username: "kittu", age: 20 });
    } else {
      reject(`ERROR:Something went bad`);
    }
  }, 1000);
});

promiseFour
  .then((userDetail) => {
    console.log(userDetail);
    return userDetail.age; // the thing which you return from first then it will get recive on second then this is called as chaining concept
  })
  .then((userAge) => {
    console.log(userAge);
  })
  .catch((e) => {
    console.log(`the error is ${e}`);
  })
  .finally(()=>{
    console.log("the promise is either resolved or rejected");
   
    
    
  })



  const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "kittu", password: 20 });
    } else {
      reject(`ERROR:Js went bad`);
    }
  }, 1000);
});

const ConsumePromiseFive=async ()=>{
  try{
    const response= await promiseFive;
    console.log(response);
  }
  catch(err){
    console.log(err);
    
  }
}
ConsumePromiseFive();



const getData=async ()=>{
   try {
    const response=await fetch("https://randomuser.me/api/");
   const Data=await response.json();
     console.log(Data);
   
   } catch (error) {
    console.log(error);
    
   }

}
// getData()


// now fetch data using promises ,then & catch

fetch("https://randomuser.me/api/")
.then((response)=>{
   return response.json()
})
.then((responseConvertedToData)=>{   // chaining concept it get the data which first then returns
    console.log(responseConvertedToData);
   
})
.catch((err)=>{
  console.log(err);
  
})