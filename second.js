//arthemetic operators
/*let a=5;
let b=2;
console.log("a=",a);
console.log("b=",b);

console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b",a**b);  //exponential
*/

//unary operator
// let a=5;
// let b=2;
// console.log("a=",a);
// console.log("b=",b);

// b--;  
// console.log("a=",a, "& b=",b);

// console.log("a++=",a++);
// console.log("a=",a);
// console.log("++a=",++a);

// assignment operator
// =, +=, -=, *=, %=, **=

//logical operator
// let a=6;
//  let b=2;

//  let cond1= a<b;
//  let cond2 =a=== 5;
//  console.log("cond1 && cond2",cond1 && cond2);
//  console.log("!(cond1 && cond2)",!(cond1 && cond2));

//conditonal statement
// let mode="dark";
// let color;
// if (mode==="dark"){
//     color="black";

// }
// if (mode=== "light"){
//     color="white";
// }
// console.log(color);

// let mode="light";
//  let color;
//  if (mode==="dark"){
//     color="black";
//  }
//  else{
//     color="white";
//  }
//  console.log(color);

//ternary operator
// let age= 24;
// age>18? console.log("eligible to vote"):console.log("not eligible to vote");
// let result = age>18?"is adult":"is not adult";
// console.log(result);

// practice questions
// let num=prompt("enter a number");
// if(num%5===0){
//     console.log (num," is a multiple of 5");

// }
// else{
//     console.log(num ," is a not a multiple of 5");
// }

let score=prompt("enter a score");
if(score>=90 && score<=100){
    console.log("your grade is : A");
}
else if (score>=80 && score <90 ){
    console.log("your grade is :B");

}
else if(score>=70 && score<80){
    console.log("your grade is :C");

}
else if(score >=60 && score<70){
    console.log("your grade is :D");

}
else if(score >=0 && score<60){
    console.log("your grade is :F");

}
