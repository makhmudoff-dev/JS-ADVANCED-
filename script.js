// spread and rest operators

//...

//Spread Operator in arrays
const vegetables = ["carrot", "potato", "onion"];
const fruits = ["apple", "banana", "orange"];

// console.log(...vegetables);

const allFood = [...vegetables, ...fruits];

// without spread operator
console.log(allFood);

// with spread operator
console.log(...allFood);

//Spread operator in objects

const harvestOfVegetable = {
  carrot: 30,
  potato: 45,
  onion: 50,
};

const harvestOfFruits = {
  potato: 100,
  apple: 100,
  banana: 100,
  orange: 1000,
};

console.log({ ...harvestOfVegetable, ...harvestOfFruits });

// Rest operators

// rest in objects

const user = {
  name: "John",
  age: 34,
  job: "programmer",
  city: "San Francisco",
};

/* 
// without the rest operators
const { name, age } = user;
console.log(name, age);
*/

// using with rest operators

const { name, age, ...about } = user;
console.log(name, age, about);
