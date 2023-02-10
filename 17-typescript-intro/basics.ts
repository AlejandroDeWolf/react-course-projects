// Primitives: number, string, boolean, undefined, null, symbol, bigint
// More complex types: arrays, objects
// Function types, parameters

// Primitves
let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[]; // array of strings

hobbies = ["Sports", "Cooking", "Coding"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 30,
};

let people: {
  name: string;
  age: number;
}[];

people = [
  {
    name: "Max",
    age: 30,
  },
  {
    name: "Manu",
    age: 31,
  },
];
