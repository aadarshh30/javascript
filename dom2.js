// some more dom manipulation

//getAttribute(attr)- to get the attribute value

// let div=document.querySelector("div");
// console.log(div);
// let name=div.getAttribute("name");
// console.log(name);


// let para=document.querySelector("p");
//  console.log(para.getAttribute("class"));

//setAttribute(attr,value) - to set the attribute value
 
// console.log(para.setAttribute("class","newClass"));

//style
//node.style

// let div= document.querySelector("div");
// console.log(div.style);
// //to change the style
// div.style.backgroundColor="red";
// div.style.backgroundColor="purple";
// //div.style.visibility="hidden";

// div.style.fontSize="26px";
// div.innertext="hello js";


// insert elements
// if  you want to add new elements then use document.createElement()

// if you want to create a button
// let newbtn=document.createElement("button");
// // newbtn.innerText="click me";
// //  console.log(newbtn);

 // now it has been created , but screen pr kese dikhaye for that you have to add this new element to yur document (jo tree like model tha)
 //we have to add this element in the dom tree model
 //we have 4 main methods for that:

 //node.append(el)- adds at the end of the node(inside).

//  let div=document.querySelector("div");
//  div.append(newbtn);

 //node.prepend(el)- adds at the start of the node(inside).
// div.prepend(newbtn);

// node.before(el)- adds before the node(outside).
// div.before(newbtn);

//node.after(el)-adds after the node(outside.)
// let para= document.querySelector("p");
// para.after(newbtn);

// let heading=document.createElement("h1");
// heading.innerHTML="<i>hi , i am new</i>";

//  let body=document.querySelector("body");
//  body.prepend(heading);

// // for deleting elements
//node.remove()-removes the node
// let para=document.querySelector("p");
// para.remove();
// heading.remove();

// read about this two methods of dom- appendchild() and removechild() from mdn docs

//practice questions-1
// let newbuttn=document.createElement("button");
// newbuttn.innerText="click me";
// newbuttn.style.backgroundColor="red";
// newbuttn.style.color="white";

// console.log(newbuttn);

// document.querySelector("body").prepend(newbuttn);


//pc-q2

let para=document.querySelector("p");
para.getAttribute("class");

// para.setAttribute("class","newClass");
// by this way completely overwrite the class name when you add a new one.
//purani css prop. bhi remove hogyi jab new class overwritee kiya toh.
//to overcome this.
// use classlist- collection of the class attributes of the element.
para.classList.add("newClass");
//we can also remove the class by using remove() method
