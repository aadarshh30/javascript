// a javascript is an entity having state and behavior (property and method).
const student={
    fullName:"aadarsh singh",
    marks:84.4,
    printMarks: function(){
        console.log("marks =",this.marks); //this- student.marks
    },
};
//Js ovject have a special property called prototype.

// we can set prototype using  __proto__

const employee={
    calcTax1(){
        console.log("tax rate is 10%");
    },
    // calcTax2: function(){
    //     console.log("tax rate is 20%");
    // },
};

// const karanArjun={
//     salary:50000,


// }

// karanArjun.__proto__=employee; //now emplloyee objecct prototype ban gya karanarjun object ka , mtlb ab karanarjun object can access employee's function

// const karanArjun2={
//     salary:50000,

// }
// const karanArjun3={
//     salary:50000,

// }
// const karanArjun4={
//     salary:50000,

// }

// karanArjun2.__proto__=employee;
// karanArjun3.__proto__=employee;
// karanArjun4.__proto__=employee;
// if object and prototype have same method, object's method will  be used.
const karanArjun={
    salary:50000,
    calcTax1(){
        console.log("tax rate is 20%");
    },
};
karanArjun.__proto__=employee;




// classes in js
// class is a program -code template for creating objects.
// thosw objects will have some state (variables) & some behaviour (functions) inside it.

// if we want to create  multiple objects through a common blueprint or template.

//constructor() method is:
//automatically invoked by new
// intializes object



// class ToyotaCar{

//     constructor(brand,mileage){
//         console.log("creatihng new object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     // setBrand(brand){
//     //     this.brandName=brand;
//     // }

// }

// let fortuner=new ToyotaCar("fortuner",10);//constructor invoked.
// // fortuner.setBrand("fortuner");
// let lexus=new ToyotaCar("lexus",12);
// // lexus.setBrand("lexus");


//inheritence in js
//passing down properties and methods from parent class to child class.

class Parent{
    hello(){
        console.log("hello");
    }
}

class child extends Parent{
    
}

let obj =new child();



// class person{
//     constructor(){
//         this.species="homosapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//  sleep(){
//     console.log("sleep");

//  }
//  work (){
//     console.log("do nothing");
//  }
// }

//   class Engineer extends person{
//     work(){
//         console.log("solve problem, build something");
//     }
//   }

  
//   class doctor extends person{
//     work(){
//         console.log("treat patients");
//     }
//   }

// let aadarshObj=new Engineer();// if child and parent have same method,child class function work will be invoked, overridingn

// super keyword
// the super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

// class person{
//     constructor(){
        
//         this.species="homosapiens";
        
//     }
//     eat(){
//         console.log("eat");
//     }

// }


//   class Engineer extends person{
//     constructor(branch){
       
//         super();//to invoke parent class constructor.
//         this.branch=branch;
        
//     }
//     work(){
//         console.log("solve problem, build something");
//     }
//   }

//    let e1=new Engineer("chemical engg");



// class person{
//     constructor(name){
        
//         this.species="homosapiens";
//        this.name=name; 
//     }
//     eat(){
//         console.log("eat");
//     }

// }


//   class Engineer extends person{
//     constructor(name){
       
//         super(name);//to pass value to the paarent class constructor.
        
        
//     }
//     work(){
//         super.eat();// accessing parent class methods
//         console.log("solve problem, build something");
//     }
//   }

//    let e1=new Engineer("aadarsh");



//practice question


let data ="secret information";

class User{
    constructor(name, email){
             this.name=name;
             this.email=email;
    }
    viewData(){
        console.log("data=",data);
    }
}

let student1=new User("aadarsh", "adofficial@gmail.com");
let student2=new User("aman","aman2@gmail.com");



class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data="some new value";
    }
}

let admin1 = new Admin("addy admin","admin@gmail.com");


//error handling


let a=5;
let b=10;
console.log("a=",a);
console.log("b=",b);

console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c);// hums e koii error hogya
}

catch(err){
    console.log(err);s


}
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);

//try catch block


