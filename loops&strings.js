// for(let i=1; i<=5;i++){
//     console.log("aadarsh is back baby!");
// }

// sum to 5
//let sum=0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log(sum);

//infinite loop : a loop that never endss

// while loop
// let i=1;
// while(i<=10){
// console.log("again");
// i++;
// }
 

//do while

// let i=1;
// do{
//      console.log("print ");
//      i++;
// }
// while(i<=5);

//for of loop
//help to iterate on elements of strings, arrays etc

// let str="get it done";
// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log(size);

//for in loop- used for OBJECTS, and returns keys of the key-value pair

// let student={
//     name:"aadarsh singh",
//     age:22,
//     cgpa:8.4,
//     isPass:true,
// };
// for(let key in student){
//     console.log(key,":",student[key]);
// }

//practice for loops

// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// q2
// let gameNum=22;
// let userInput=prompt("enter a number");


// while(userInput != gameNum){
//     console.log("your entered number :",userInput);
    
//    userInput= prompt("try again ! you guessed the wrong number ");

// }
// console.log("bingo! you entered the right number");






//STRINGS

// let str="aadarsh singh"; // creating a string , method 1
// let rstr='aadarsh singh'; // method 2
 
// console.log(str.length);

// console.log(str[8]);

//TEMPLATE LITERALS - A SPECIAL TYPE OF STRING crested using back ticks(`) and to have a way to embed expressions in strings,, to create strings by doing substitution of placeholders
// let specialString=`this is a example of template literal`;
// console.log(specialString);
// //it's usage

// let obj={
//     item:"pen",
//     price:10,
// };
// console.log("the cost of ",obj.item,"is ",obj.price ,"rupees");
//a better form to combine this string into a single string
// using template literal
// let op=`the cost of ${obj.item} is ${obj.price} rupees`;  // using placeholders i.e. ${}
// console.log(op);
// this phenomena is called string interpolation..

//e.g
// let specialString=`this is template literal ${1+2+3}`;
// console.log(specialString);

//escape character -\n( to the line ). \t(gives a tab space btw strings). in length od the string it is counted as an individual .
// console.log("string going \n down");

// string methods

// let str="aadarsh singh  ";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// //console.log(str.trim());// removes whitespaces
// console.log(str.slice(0,3));
// let str1="aadarsh ";
// let str2="is here";
// console.log(str1.concat(str2));
// let res="do you know "+str1+str2;
// console.log(res);


// str="hello javascriot";
// console.log(str.replace("io","ip"));

// str="i love javascript";
// console.log(str.charAt(5));

//practtice22

let fullName=prompt("enter your full name");

let sstr="@"+fullName+fullName.length;

console.log("your user name is :",sstr);
