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
