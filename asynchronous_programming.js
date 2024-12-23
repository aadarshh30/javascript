//synchronous - the code runs in a particular sequence of instructions given in the program, each instruction waits for the previous instruction to complete its execution.

// console.log("one");
// console.log("two");
// console.log("three");


/*
    asynchronous -
    due to synchronous prog, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
    Asynchronous code execution allows to execute next instructions immediately and doesnt block the flow.

*/
// function hello (){
//     console.log("helllo");
// }
// setTimeout(hello, 4000)      //timeout 2 sec= 2000 milisec.

// console.log("one");
// console.log("two");


// setTimeout(() =>{
//     console.log("hello");
// },4000);

// console.log("three");
// console.log("four");

// callbacks - a callback is a function passed as an argument to another function.
// function sum(a,b){
//     console.log(a+b);
// }
// function cal(a,b,sumCallback){
//     sumCallback(a,b);

// }
// cal(1,2,sum);// dont pass it with paranthesis..


// setTimeout(()=>{
//     console.log("hello");
// },3000); // this function also take callback


// callback Hell
/* nested callbacks stacked below one another forming a pyramid structure.(pyramid of doom)
 this style of programming becomes difficult to understand & manage.*/

 //nesting

//  for(let i=0;i<5;i++){
//     let str="";
//     for(let j=0; j<5;j++){
//         str=str+j;
//     }
//    console.log(i,str);
//  }

//callback hell


// function getData(dataId,getNextData){// 2s
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//         getNextData();
//     }
//     },2000);

// }


// getData(1); //2s
// getData(2);//2s
// getData(3);//3s


// getData(1,getData(2)) //error :immediate execution..

// callback hell
// getData(1,()=>{
//     console.log("getting data 2....");
//     getData(2,()=>{
//     console.log("getting data 3....");
//         getData(3);
//     });
// });





//to solve the problem of callback hell,use promises

//promises
/*promise is for "eventual completion of task. it is an object injs. it is a solution to callback hell" 
*/
//resolve & reject  are  callbacks provided by js
//resolve -ye function run hua mtlb promise completed
// reject - ye func run hua mtlb promise fulfiled, with error

// let promise = new Promise ((resolve,reject)=>{
// console.log("i am a promise");
// reject("some error occured");
// // resolve("success")
// });


// function getData(dataId,getNextData){// 2s
//     return new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//                 console.log("data",dataId);
//                 // resolve("success");
//                 // reject("error");
//                 if(getNextData){
//                 getNextData();
//             }
//             },5000);

// })
// }


/* promise object can be pending, resolved (fulfilled) , rejected
promise has state (pending , fulfilled )& some result (result for resolve & error for reject)*/


//promises are used using 
// .then() and .catch()

/*promise .then((res)=>{....})  - if promise is fulfilled
promise.catch((err)=>{...}) - if promise is rejected
*/


// const getPromise=()=>{
    
// return new Promise ((resolve,reject)=>{

//     console.log("i am a promise");
//     // reject("network error");
//     resolve("success")
//     });
    

// }
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// })

// promise.catch((err)=>{
//     console.log("rejected",err);
// })

//promise chain


function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("data 1");
         resolve("success");
        },4000)

    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("data 2");
         resolve("success");
        },4000)

    })
}
// console.log("ftching data1...");
// let p1 =asyncFunc1();
// p1.then((res)=>{
    
//     console.log("ftching data2...");
// let p2 =asyncFunc2();
// p2.then((res)=>{})
// })



// console.log("ftching data1...");

// asyncFunc1().then((res)=>{
    
//     console.log("ftching data2...");

//     asyncFunc2().then((res)=>{})
// })



function getData(dataId){// 2s
    return new Promise((resolve,reject)=>
{
    setTimeout(()=>{
                console.log("data",dataId);
                resolve("success");
                // reject("error");
             
            },3000);

})
}


// using promise chain


// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res);
//     let p2=getData(2);
//     p2.then((res)=>{
//         console.log(res);
//     })

// })

// getData(1).then((res)=>{
//     return getData(2);

// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// });




//Async-Await

/*async function always return a promise
async function myFun(){
}

awaits pauses the execution of its surrounding async function until the promise is settled. can be only used inside an async function */

async function hello() {
console.log("hello");  

}


// function api(){
//     return new Promise ((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("weather data");
//        resolve(200);
//        },2000);
//     });
// }

// // await api(); error

// async function getWeatherData() {
//     await api();
//     await api();   
// }


async function getAllData() {
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");

    await getData(2);
    console.log("getting data 3...");

    await getData(3);
    console.log("getting data 4...");
    await getData(4);
    console.log("getting data 5...");
    await getData(5);
    
}

//iife read it using mdn docs