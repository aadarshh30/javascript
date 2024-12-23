// fetch api
/*the fetch api provides an interface for fetching (sending / receiving )resources.
it uses request and response objects
the fetch () method is used to fetch a resource (data)*/


const url="https://catfact.ninja/fact";
// let promise =fetch(url);   //fetch() returns a promise
// console.log(promise);
const factPara=document.querySelector("#fact");
const btn= document.querySelector("#btn");


const getFacts =async()=>{
    console.log("getting data");
let response = await fetch(url);
console.log(response);


// fetch method is used without any options ..then it create  a paricular type of request called get request.( data laane ka kaam)

// ajax is asynchrounous js and XMl.// data jata tha xml format meein abi json format mein jata h.
// json is javascript object notation.
// json () method: returns a second promise that resolves with the result of parsing the response body text as json.(input is JSON, output is JS object)
/*response (json)  format ----> converted to js object  , usable format but how? using json() method*/

let data=await response.json(); // response.json() return the second promise...
console.log(data[0].text);
factPara.innerText=data[0].text;
};

// using promise chaining

// function getFacts(){
//     fetch(url).then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText=data[2].text;
//     });
// }
btn.addEventListener("click",getFacts);

// requests & response
// http verbs - hyper text transfer protocol
// response status code
// http
