// creating arrays
// console.log("villian");
let students = [];
console.log(students);
// array of strings
let colors = ["red", "orange", "yellow", "blue"]
// console.log(colors[0]);
console.log(colors.indexOf("red"));
// console.log(colors)
let stuff = [true, 68, 'cat', null]
console.log(stuff)
colors[0] = "pink";
console.log(colors);
let name = "vill";
name[0] = "candy";
let fruits = ["mangos", "bananas", "apples"];
// adding an item to the end of an array(push)
fruits.push("oranges")
// pop removes an item from the end. the opposite of push
fruits.pop();
// adding(unshift) and removing(shift) items from an array
fruits.shift();
fruits.unshift("berries")
console.log(fruits);
// concatinating arrays
let cohort1 = [true, false,"seven"];
let cohort2 = ["aim", "green", 16];
let femidevs = cohort1.concat(cohort2);
console.log(femidevs.includes("green"));
console.log(femidevs.includes("yellow"));
console.log(femidevs.indexOf(16));

// console.log(femidevs);

console.log(femidevs.join(', '))
console.log(femidevs.reverse());
let femidevs2 = femidevs.slice()
// console.log(femidevs.slice(3));
// console.log(femidevs.slice(2, 5));
console.log(femidevs.splice(2, 1, "bfgr"));