// for loops
// for (let i = 1; i <=10; i++){
//     console.log(i);
// }
for (let k = 50; k>=0; k-=10){
    console.log(k);
}
const animals = ["cow", "dogs", "cats", "goats", "sheep"];
// console.log(animals);
// for(let i = 0; i < animals.length; i++){
//     console.log(`Animals at index ${i} is ${animals[i]}`);
// }
// for (let i = 0; i<=4; i++){
//     console.log(`Outer :${i}`);
//     for (let j = 0; j < structuredClone.length; j++){
//         console.log(`inner : ${str[j]}`);
//     }
// }
let num = 0;
while (num < 10) {
    console.log(num);
    num++
}
let targetNum = Math.floor(Math.random() *20);
let guess = Math.floor(Math.random() *20)

while (guess !== targetNum){
    console.log(`Guessed ${guess}...INCORRECT!`);
    guess = Math.floor(Math.random() *20);
}
console.log(`Guessed: ${guess} & targetNum: ${targetNum} ...CORRECT`);