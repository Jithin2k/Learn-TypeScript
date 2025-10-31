- Infer Types/Implicit Types - Automatic type detection by TS iteself;

- Explicit Types - Manually types are defined

- Data Types --> String,Number,Boolean,Array,Object.

- Interface - It defines what properties and methods an object should have, but not how they’re implemented.

* Interfaces are used purely for type-checking and are removed during compilation.

- Type in TS - - Defines a custom name for a type (like a shortcut).

* Can represent primitive types, object shapes, unions, intersections, and more.
* Used for type-checking only—it disappears during compilation.

- Union/Optional - Union Types (|) -
  Union types let you specify that a value can be one of several types.

Optional properties are defined using a ? after the property name. - interface User {
name: string;
age?: number; // optional
}

- Functions - In TypeScript, functions are typed blocks of reusable code that can accept parameters and return values with clearly defined types. This helps catch errors early and improves code clarity

* Named Types - med types in TypeScript refer to custom types that are given a specific name using either type aliases or interface declarations. These names can then be reused throughout your codebase to enforce structure and improve readability.

* Function Overriding -Function overloading in TypeScript allows you to define multiple function signatures for a single function name, enabling it to handle different types or numbers of parameters while maintaining type safety.

* Generics in TS - Generics are like placeholders for types. Instead of hardcoding a type like string or number, you use a type variable (usually T) that gets replaced when the function or class is used.

* ENUMs - In TypeScript, an enum (short for "enumeration") is a special type that lets you define a set of named constants—making your code more readable and organized when working with fixed sets of values.

enum Direction {
  North,   // 0
  East,    // 1
  South,   // 2
  West     // 3
}

let move = Direction.East;
console.log(move); // 1
