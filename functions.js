// //block of code that performs a specific task, can be invoked whenever needed
// function myfunction(){
//     console.log("we are learning js");
// }
// myfunction();

// for defining inputs we will give parameters
// function  myfunction(msg){  //parameters
//     console.log(msg);
// }

// myfunction("i love js"); //arguements


// function sum(a,b){
   // a, b arr local variables for this function.
//     console.log(a+b);
// }

// sum(13,2);

// function sum(a,b){
//     console.log("before return");
//     return a+b;
//     console.log("after return");// un reachable code, return statmt ke bad kuch bi statements ho kaam nhi krti 
// }

// let c =sum(12,2);
// console.log(c);



// arrow functions
// compact way of writing afunction

// const arrowSum=(a,b)=>{
//     console.log(a+b);

// }

// const arrowMul=(a,b)=>{
//     return a*b;
// }
// let c=arrowMul(3,2);
// console.log(c);

// const printhello=()=>{
//     console.log("hello js");
// }
// printhello();

// practice

// function vowel(str){
//     let count =0;
// for(let char of str){
  
//     if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//         count++;

//         }
        
// }
// console.log(count);
// }

// vowel("aadarsh");


// const vowel=(str)=>{
//     let count =0;
//     for(let char of str){
      
//         if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//             count++;
    
//             }
            
//     }
//     console.log(count);

// }
// vowel("aadarsh");

// for each loops kn array

// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);

// });

// arr.forEach((val)=>{
//     console.log(val);
// })

// let arr1=["delhi","pune","mumbai"];
// arr1.forEach((valu,i,arr1)=>{
//     console.log(valu.toUpperCase(),i,arr1);  // there are three parameters value, index and the array itself.
// })

// higher order functions

// e.g for each loop
//functions hote jo dusre function ko as a parameter le lete hai or they return another function as their output.


//practice
// let arr1=[1,2,3,4,5];
// arr1.forEach((val)=>{
//     console.log(val**2);
// });

//MAP methods
//very similar to for each, but a difference, map returns a new array of values.
// let arr=[1,2,3,4,5];
// let newArr=arr.map((val)=>{
//     return val**2;
// });
// console.log(newArr);
// console.log(arr);


//FILTER method
// create a new array of elements that give true for a condition/filter.
//e.g: all even elements


// let arr=[1,2,3,4,5,6,7];
// let  newArr=arr.filter((val)=>{
//     return val%2==0;
// });
// console.log(newArr);
// console.log(arr);

//REDUCE method
//performs some operations  and reduces the array to a single vlaue. it returns that single value.

// let arr=[1,2,3,4];
// let output=arr.reduce((res,current)=>{
//     return res+current;
// });
// console.log(output);
//

//practice

// let marks=[67,33,64,99,86,94,91];
// let newMarks=marks.filter((val)=>{
//     return val>90;
// });
// console.log(newMarks);

let n=prompt("enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}

console.log(arr);
let output=arr.reduce((res,current)=>{
    return res+current;
});
console.log(output);

let product=arr.reduce((res,current)=>{
    return res*current;
});
console.log(product);