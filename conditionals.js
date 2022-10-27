console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);
console.log(1 <= 2);
console.log('b'== 'c');
console.log(0 == '');
console.log(true == false);
console.log(0 == true);
console.log(0 === false);
console.log(0 == false);
null == undefined;
10==='10';
10 != '10';

let rating = 2; 
if (rating === 3) {
    console.log("YOU ARE A SUSPECT!");
}
else if(rating === 2){
    console.log("MEETS EXPECTATION!");
}
let day = 8;

if(day === 1){
    console.log("Monday");
}
else if(day === 2){
    console.log("Tuesday");
}
else if(day === 3){
    console.log("Wednesday");
}
else if(day === 4){
    console.log("Thursday");
}
else if(day === 5){
    console.log("Friday");
}
else if(day === 6){
    console.log("Thursday");
}
else if(day === 7){
    console.log("Sunday");
}
else(
    console.log("INVALID DAY")
)
// create a variable with the name password and give it any value
// the value of the name must be a string
// value of the password must be greater than or equal to 6 characters
// ensure the value of the  password has no spaces in between

let password = "151617";
if (password.length >=6){
    if(password.indexOf(' ') === -1){
        console.log("PASSWORD IS CORRECT");
    }
    else {
        console.log("INCORRECT PASSWORD")
    }
}
else {
    console.log("INCORRECT PASSWORD")
}
1 <= 4 && 'a' === 'a'
let age = 76;

console.log(age === 10 ? "correct age" : "wrong");
switch (day) {
    case value:
        
        break;

    default:
        break;
}