// ! Infer Types
// const userName = "Debug Media";
// let subscribes = 30000;

// !Explicit Types
// let user : string = "Debug Media";
// let sub : number = 20000;
// let isSub : boolean = true;

// let skills : string[] = ["TS","JS"];
// let age : number[] = [1,2,3,4]

// let userDetail : {name:string,age:number} = {
//     name : "Jithin",
//     age : 15
// };

// ! Interface

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

// ! Type
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

// ! Union/Optional

// type Details = {
//   name: string;
//   age: number | string;
//   salary: number | string;
//   getName ?: () => void;
// };

// let userDetail2 : Details = {
//     name : "Jithin",
//     age : 20,
//     salary : 55555,
//     getName () {
//         console.log("jii");

//     }
// };

// let skill : (string | number)[] = ["js","ts",23,4]

// !function - Method 1

// type Details = {
//   name: string;
//   age: number | string;
//   salary: number | string;
//   getName?: () => void;
// };

// let userDetail: Details = {
//   name: "Jithin",
//   age: 20,
//   salary: 55555,
//   getName() {
//     console.log("jii");
//   }
// };

// function getUser(detail: Details) {
//   return detail.age;
// }

// console.log(getUser(userDetail)); // Should log: 20

// function getUser({name,age} : {name : string, age:number}) {
//   return name;
// }
// getUser({name: "jithin",age :20})

// Named Types -type has to be Capital
// type StatusType = "pending" | "completed" | "failed";

// let currentStatus : StatusType = "completed"

// ! Function Overloading
// 1.Normal Function

// function sum(num1: number | string, num2: number | string): number | string {
//   if (typeof num1 === "string" || typeof num2 === "string") {
//     return num1 +""+ num2;
//   }
// }

// function overloading example

// function add(num1: number, num2: number): number;
// function add(num1: string, num2: string): number;

// function add(num1: any, num2: any): any {
//   return num1 + num2;
// }

// add(2, 5);

// ! Generics in TS

// function getAge<T>(age: T): T {
//   return age;
// }

// getAge<string>("20");
// getAge<number>(20);

// type UserDetails = {
//   name: string;
//   age: number;
// };

//  ? Merging types
// type AdminDetails = UserDetails & {
//   // firstname: string;
//   role: string;
// };

// const userDetails: UserDetails = {
//   name: "Jithin",
//   age: 20,
// };

// const adminDetails: AdminDetails = {
//   name: "Nithin",
//   age :25,
//   role: "admin",
// };

// function getDetails<T>(details : T) : T {
//   return details;
// }

// const value = getDetails<UserDetails>(userDetails);
// const adminValue = getDetails<AdminDetails>(adminDetails)

// !ENUMS

// type StatusType = "pending" | "completed" | "failed";

// enum StatusType {
//   PENDING,
//   COMPLETED,
//   FAILED,
// }

// function getStatus(orderID: string, status : StatusType) {
//   console.log(orderID, "==",status);

// }
// getStatus("1234",StatusType.COMPLETED)

//  ! Type Casting

// let userName = "Jithin" as const;
// let num = 24 as number;

// // ! KEY OF/TYPE OF

// const  StatusType = {
//   PENDING : "pending",
//   COMPLETED : "completed",
//   FAILED : "failed",
// }

// function getStatus(orderID : string,status :keyof typeof StatusType){
//     console.log(orderID,"==",StatusType[status]);
    
// }

//  getStatus("1234","COMPLETED")

// !Utility Types

// type Users = {
//  name :string;
//     age : number;
// }

// & Readonly
// const newUser : Readonly <Users> = {
//     name : "debug media",
//     age : 99
// }


// &Partial
// const newUser : Partial <Users> = {
//     name : "debug media",
//     age : 99
// }

// newUser.age = 66;
// 

// &Required
// const newUser : Required <Users> = {
//     name : "debug media",
//     age : 99
// }


// &Pick
// const newUser : Pick <Users,"name"> = {
//     name : "debug media",
// }

// &Omit
// const newUser : Omit <Users , "age"> = {
//     name : "debug media",
// }

// &Exclude
// type StatusType = "pending" | "completed" | "failed";
// const status : Exclude<StatusType,"failed" > = ""


// &Record
// type Food = Record<string,string>;

// const food : Food = {
//     PIZZA : "PIZZA",
//     CHICKEN : "CHICKEN"
// }

//  ! any - avoid using any 

// let uersName : any = "jithin";

// uersName.push();

// !unknown
// let userName : unknown = "jithin";

// userName as string

