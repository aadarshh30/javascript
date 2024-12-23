// how can we access html in js
//console.dir(document.body);//dir prints the objects on console
// console.log(document.body);//it prints the html object code
// if you want to change something dynamically on your webpage without going through your html ,css pages you can do on js using dom

//getelementbyid- # symbol with id name while using css ont the particular html element,, give unqiue ID for each element 
//  let heading=document.getElementById("myID");
// // returns h1
//  console.dir(heading);

//selection with class- used when multiple elements of same css style ,same category,, (.)symbol is used

// let headings=document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

//selection with tag-select the element with specified tag name.

// let paras=document.getElementsByTagName("p");
// console.dir(paras);

//query selector
// best method to access any element ,we can pass id, class, tag, select the html element with specified CSS selector.

// let firstEl=document.querySelector("p");// jo bhi pass kiya hai usse matching 1st element ko return krke de deta hai 
// console.dir(firstEl);
 
// let Allele=document.querySelectorAll("p"); // all matching elements
// console.dir(Allele);


// let firstEl=document.querySelector(".myClass");// jo bhi pass kiya hai usse matching 1st element ko return krke de deta hai 
// console.dir(firstEl);
 
// let Allele=document.querySelectorAll(".myClass"); // all matching elements
// console.dir(Allele);


// let firstEl=document.querySelector("#myID");// jo bhi pass kiya hai usse matching 1st element ko return krke de deta hai 
// console.dir(firstEl);
 
// let Allele=document.querySelectorAll("#myID"); // all matching elements
// console.dir(Allele);

// move to next html code on index_dom.html

// properties-to get ,to set the properties on the elements
//tagName- returns tag for element nodes
// let firstEl=document.querySelector("#myID");
// console.dir(firstEl);
 

// let firstEl=document.querySelector("p");
// console.dir(firstEl);

//innerText- returns the text content of the element and all  its children.
//  let div=document.querySelector("div");
// console.dir(div);

// innerHTML- returns plain text or HTML contents  in the element.including tags etc
// let heading =document.querySelector("h1");


//textContent- returns textual content even for hidden elements.



//practice
//Question1 -
// let header=document.querySelector("h2");
// console.dir(header.innerText); 

// header.innerText= header.innerText+" from apna college students";
// console.dir(header.innerText); 


//practice question 2
let divs=document.querySelectorAll(".box");
console.log(divs);
// divs[0].innerText="new unique value 1 ";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";
let idx=1;
for(let div of divs){
    div.innerText=`new unique value of div${idx}`;
    idx++;
}
