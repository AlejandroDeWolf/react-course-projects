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

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 30,
};

let people: Person[];

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

// Type inference

let course = "React - The Complete Guide";

// course = 12345; error
course = "React - The Best Guide";

// Union types

let secondCourse: string | number = "React - The Complete Guide";

secondCourse = 12345; // no error

// Functions & types

function add(a: number, b: number) {
  // return type is inferred, it will be number automatically
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // ['d', 'a', 'b', 'c']

// updatedArray[0].split(''); // error
