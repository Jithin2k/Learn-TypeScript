// // Infer Types
// const userName = "Debug Media";
// let subscribes = 30000;

// // Explicit Types
// let user : string = "Debug Media";
// let sub : number = 20000;
// let isSub : boolean = true;

// let skills : string[] = ["TS","JS"];
// let age : number[] = [1,2,3,4]

// let userDetail : {name:string,age:number} = {
//     name : "Jithin",
//     age : 15
// };

// Interface

// interface Details{
//     name : string;
//     age : number;
//     salary : number;
//     getName : () => void;
// }

// let userDetail2 : Details = {
//     name : "Jithin",
//     age : 20,
//     salary : 55555,
//     getName () {
//         console.log("jii");

//     }
// };

// Type
// type Details = {
//   name: string;
//   age: number;
//   salary: number;
//   getName: () => void;
// };

// let userDetail2 : Details = {
//     name : "Jithin",
//     age : 20,
//     salary : 55555,
//     getName () {
//         console.log("jii");

//     }
// };

// Union/Optional

type Details = {
  name: string;
  age: number | string;
  salary: number | string;
  getName ?: () => void;
};

let userDetail2 : Details = {
    name : "Jithin",
    age : 20,
    salary : 55555,
    getName () {
        console.log("jii");

    }
};

let skill : (string | number)[] = ["js","ts",23,4]