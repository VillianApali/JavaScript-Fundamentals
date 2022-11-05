function grumpus() {
    console.log('ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}
grumpus();
function greet(names){
    console.log(`Hello, ${names}`);
}
greet('Villian');
function avg(array){
    let sum = 0;
    for(let num of array){
        sum+=num;
        // console.log(sum); brings a cumulative summation
    }
    let average = sum / array.length
    console.log(average);
}
avg([8, 9, 6, 12, 16]);
console.log("hello".toUpperCase());

function findLargest(x, y){
    if (x > y) {
        console.log(`${x} is larger than ${y}`);
    }
    else if (x < y){
        console.log(`${y} is larger than ${x}`);
    }
    else {
        console.log(`${x} and ${y} are equal`);
    }
}
findLargest(50, 50);
function add(x){
    let sum = 0
    for (let num of x){
        sum+=num
}
console.log(sum);
}
add([7, 6]);

function subtract(x, y){
    console.log(x-y);
}
subtract(70, 50);

function multiplication(x, y){
    console.log(x*y);
}
multiplication(6, 7);

function division(x, y){
    console.log(x/y);
}
division(60, 30);

function modulo(x, y){
    console.log(x%y);
}
modulo(11, 5);

function twoReturns(x, y){
    return [x, y]; //returns more than teo values
}
let stored = twoReturns(3, 7);
console.log(stored);

function sqrt(sq){
    return sq * sq
    // console.log(sq);
}
let square = sqrt(5)
console.log(square);

function addNext(x, y){
    console.log(x + y);
}
const next = addNext(2, 2)
console.log(next);

function isPurple(color){
        if (color === "purple"){
            return true;
        }
          else {
            return false;
        }        
}   
let clrv = isPurple("purple");
console.log(clrv);

function stay(colors){
    if (colors === "purple" || colors === "yellow" || colors === "cyan"){
        return true;
    }
      else {
        return false;
    }        
}   
let col = stay("purple", "pink", "blue","yellow");
console.log(col);

function rollDice(){
    let roll = Math.floor(Math.random() *6) +1; //prints numbers between 0 and 6
    console.log(`Rolled ${roll}`);
}
rollDice();

function isValid(username, password){
    if(password.length < 8){
        return "Invalid password"
    }
    if (password.indexOf(" ") !==-1){
        return "Invalid Password"
    }
    if (password.indexOf(username) !==-1){
            return "Invalid Password"
    }
        return  "Valid Password"
}

let myPassword = isValid("Miami bitch", "villia napali");
console.log(myPassword);

function getCard(){
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9','10'];
    //general index of values randomly
    const valIdx = Math.floor(Math.random() *values.length);
    const value = values[valIdx]
    // declare avariable of suits
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

// index of suits randomly
    const suitIndex = Math.floor(Math.random() *suits.length);
    const suit = suits[suitIndex];
    console.log(value, suit);
}
getCard();