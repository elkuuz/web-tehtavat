// Create and initialize the fruits array
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Display contents of fruits array
console.log("Fruits:", fruits);

// Display length of fruits array
console.log("Length of Fruits:", fruits.length);

// Display element at index 2
console.log("Element at Index 2:", fruits[2]);
d;
// Display last element using the length property
console.log("Last Element of Fruits:", fruits[fruits.length - 1]);

// Create an empty vegetables array
const vegetables = [];

// Prompt user to enter three vegetables
for (let i = 1; i <= 3; i++) {
  const veg = prompt(`Enter vegetable ${i}:`);
  vegetables.push(veg);
}

// Display contents of vegetables array
console.log("Vegetables:", vegetables);

// Display length of vegetables array
console.log("Length of Vegetables:", vegetables.length);
