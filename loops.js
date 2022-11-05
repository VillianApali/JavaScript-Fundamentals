// // for loops
// // for (let i = 1; i <=10; i++){
// //     console.log(i);
// // }
// for (let k = 50; k>=0; k-=10){
//     console.log(k);
// }
// const animals = ["cow", "dogs", "cats", "goats", "sheep"];
// // console.log(animals);
// // for(let i = 0; i < animals.length; i++){
// //     console.log(`Animals at index ${i} is ${animals[i]}`);
// // }
// // for (let i = 0; i<=4; i++){
// //     console.log(`Outer :${i}`);
// //     for (let j = 0; j < structuredClone.length; j++){
// //         console.log(`inner : ${str[j]}`);
// //     }
// // }
// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++
// }
// let targetNum = Math.floor(Math.random() *20);
// let guess = Math.floor(Math.random() *20)

// while (guess !== targetNum){
//     console.log(`Guessed ${guess}...INCORRECT!`);
//     guess = Math.floor(Math.random() *20);
// }
// console.log(`Guessed: ${guess} & targetNum: ${targetNum} ...CORRECT`);
// for(let i=50; i>=0; i-=5){
//     console.log(i);
// }
// for(let i =10; i>=2; i-=2){
//     console.log(i)
// }
// let name = 'lavin'
// console.log(`${name} ${name} ${name}`);
// const movies =[{title :'Prison Break', rating :10}, {title :'Tallgirl', rating :7}, {title :'The Flash', rating :10}]
// console.log(movies)
// let targetNum = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (true){
//     guess = Math.floor(Math.random() * 10);
//     if(guess === targetNum){
//         console.log(`Guessed: ${guess}  & targetNum: ${targetNum}...CORRECT`);
//     break;
//     }   
// }
// console.log(`Guessed : ${guess}...INCORRECT`);
// // for..of
// const soccerteams = ['Chelsea', 'Liverpool', 'Man U', 'ManCity', 'Tottenham'];
// for (let team of soccerteams){
// console.log(`${team}- www.eplteams.com/${team}`);
// }
// let str2 = "femidevs";
// for(let st of str2){
//     console.log(`${st} is bae`);
// }
// nested for of loopss
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];
for (let row of magicSquare){
    let sum = 0;
    for (let num of row){
        sum+=num
    }
    console.log(`Row of ${row} sums to ${sum}`);
}
// const movieReviews = {
//     Andrews : 10,
//     Arrivals : 9.5,
//     Alien : 9,
//     Amelie :8
// }
// for(let movie of Object.keys(movieReviews)){
//    // console.log(movie); returns only the keys not the rating
//    let score =movieReviews[movie];
// //    console.log(score); returns ratimg of movie reviews
//    console.log(`I rated ${movie} ${score}`);
// }
// const shoppingList = {
//     Bread : 120,
//     Milk : 80,
//     Blueband : 170,
//     Coffee : 250,
//     Eggs : 430,
//     Sugar : 140
// }
// console.log(shoppingList);
// console.log(shoppingList['Bread']);
// console.log(shoppingList.Milk);
// const list = Object.keys(shoppingList); returns arrays of keys
// console.log(list)
// console.log(list[1])
// console.log(shoppingList[list])
// for(let list of Object.keys(shoppingList)){
//     // console.log(list); returns keys
//     let price = shoppingList[list];
    // console.log(price); returns prices of individual items
    // console.log(`I bought ${list} @ $${price}`);
// }
// console.log(`${sum}`);
// console.log(`Total : ${shoppingList.Bread + shoppingList.Milk + shoppingList.Blueband + shoppingList.Coffee + shoppingList.Eggs + shoppingList.Sugar}`);
// let sum = o;
// for(let shop in shoppingList){
//     sum+=shoppingList[shop];
// }
// console.log(sum);
// for (let i = 0; i < 10; i++){
    
// }
const movieReviews = {
    Andrews : 10,
    Arrivals : 9.5,
    Alien : 9,
    Amelie :8
}
for(let movie of Object.keys(movieReviews)){
// //    // console.log(movie); returns only the keys not the rating
   let score =movieReviews[movie];
// // //    console.log(score); returns ratimg of movie reviews
   console.log(`I rated ${movie} ${score}`);
}
for (let i=0; i<=10; i++){
    console.log(i);
}