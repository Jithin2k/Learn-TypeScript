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
North, // 0
East, // 1
South, // 2
West // 3
}

let move = Direction.East;
console.log(move); // 1

- Type Castin in TS - Type casting in TypeScript is the process of explicitly telling the compiler to treat a variable as a specific type, even if its original type is unknown or ambiguous. It’s especially useful when working with third-party libraries, dynamic data, or DOM elements.
  eg: let value: unknown = "hello";

  let length = (value as string).length; // ✅ treated as string

* type of - typeof lets you extract the type of a variable or object.
  Example -- const user = {
  name: "Jithin",
  age: 25,
  };

type UserType = typeof user;

<!-- Output -->

{
name: string;
age: number;
}

- key of - keyof gives you a union of property names (keys) from a type.

type UserType = {
name: string;
age: number;
};

type UserKeys = keyof UserType; // "name" | "age"

<!-- Utility Types -->

<!-- Readonly --> - Makes all properties of a type immutable (cannot be reassigned).

<!-- Partial --> - Makes all properties of a type optional.

<!-- Required --> -  Makes all optional properties required.

<!-- Pick --> -  Creates a new type by selecting specific keys from an existing type

<!-- Omit --> - Creates a new type by excluding specific keys from an existing type

<!-- Exclude --> -  Exclude<T, U> is a utility type that removes from type T any types that are assignable to U. It’s super useful when you want to filter out specific members from a union type.

Exclude<T, U>

- T: the original union type
- U: the type(s) you want to exclude from T

<!-- Record --> - Record<K, T> is a utility type that constructs an object type with a set of keys K and values of type T. It’s perfect when you want to define an object with known keys and consistent value types. 
Record<Keys, ValueType>
- Keys: a union of string or number literal types
- ValueType: the type of values for each key

<!-- any in TS --> - In TypeScript, any is a special type that tells the compiler to opt out of type checking for a particular variable. It essentially disables TypeScript’s static type system for that value.
<!-- let data: any;

data = 42;         // OK
data = "hello";    // OK
data = { x: 10 };  // OK
data = () => {};   // OK -->

<!-- unknown in TS -->