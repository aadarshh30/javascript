// the change in the state of an object is known as an event
// events are fired to notify code of" interesting changes" that may affect code execution.
/*
mouse events(click, double click etc).
keyboards events(keypress, key up).*/

//node.event=()=>{
    // hadle here  }

    let btn1=document.querySelector("#btn1");

    // btn1.onclick =() => {
    //     console.log("btn1 was clicked");
    //     // let a=25;
    //     // a++;
    //     // console.log(a);//26

    // };

    // btn1.onclick =() => {
    //     console.log("handler");
       

    // };

// overwrites the old one.



    // let div=document.querySelector("div");
    // div.onmouseover=() =>{
    //     console.log("you are inside div");
    // };

    // if you define multiple handler for a element then the last wala handler works.


    //eevent object
    /* it is a type of object that has details about the event.
    all event handlers have accessto the event object's properties and methods.*/
    // e.type, e.targett,eclientX, eclientY

    // btn1.onclick =(evt) => {
    //  console.log(evt);
    //  console.log(evt.type);
    //  console.log(evt.target);
    //  console.log(evt.clientX, evt.clientY);
    //  };


    //  let div=document.querySelector("div");
    //  div.onmouseover=(evt) =>{
    //      console.log("you are inside div");
    //      console.log(evt);
    //      console.log(evt.type);
    //      console.log(evt.target);
    //      console.log(evt.clientX, evt.clientY);
    //  };
 

    //  event listeners- better way to handle events
    //node.addEventListener(event, callback) // callback a function jo dusre function mein as an arguement ke trh jata hai.
    /*node.removeEventListener(event, callback)
     note: the callback reference should be same to remove. */
     // callback is the handler.

// btn1.addEventListener("click",(evt) =>{
//     console.log("button 1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
    


// });

// btn1.addEventListener("click",() =>{
//     console.log("button 1 was clicked - handler 2");
// });

// through event listener hum same event pr multiple kaam krwa skte hai 
// remove  event listener..


// btn1.addEventListener("click",() =>{
//     console.log("button 1 was clicked - handler 1");
// });

// btn1.addEventListener("click",() =>{
//     console.log("button 1 was clicked - handler 2");
// });


// const handler3=() =>{
//     console.log("button 1 was clicked - handler 3");}

// btn1.addEventListener("click",handler3);



// btn1.addEventListener("click",() =>{
//     console.log("button 1 was clicked - handler 4");
// });

// btn1. removeEventListener("click",handler3)

// practice

let modebtn=document.querySelector("#mode");
let currMode="light";
let body= document.querySelector("body");

modebtn.addEventListener("click",()=>{
   if(currMode==="light"){
    currMode="dark";
    body.classList.add("dark");
    // body.classList.remove("light");
   }
   else{
    currMode="light";
    body.classList.add("light");
    // body.classList.remove("dark");

   }
   console.log(currMode);
});

