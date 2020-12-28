const message ='I\'m a Programmer';
const greet ='<h1>Hi</h1>';
const multiline = "hi my name \
is Blake.\
I am a nice Programmer"
console.log(message);
console.log(greet );
console.log(multiline );

//transform.js
const passphrase = 'Hi';
console.log(passphrase.length);
//remember these are methods
console.log("Yes ".toUpperCase());
const passphrase = "HI";
console.log(passphrase.toLowerCase());
console.log(passphrase);// not changes original function

//prompt.js
var name = prompt("What is your Name?");
console.log(name);
//Combine.js
const name = prompt("What is your Name?");
console.log("Hello "+name);
let message = "Hello "+name +" Happy to see you";
message = message+" Thanks. ";
message += "Just happy to see you";
console.log(message);

//template literal
const name = prompt("What is your Name?");
let message=`Hello ${name} I' will meet you ${2 * 3}'o clock`;
console.log(message);

//Introducing Conditional Statements
const answer = prompt("Which is nearest planet to the Sun?");
if(answer.toUpperCase() === "MERCURY"){
console.log("Correct Answer");
}
else{
console.log("Wrong Answer");
}

//Booleans values
const number = 7;
const guess = prompt("Guess the Number from 1 to 10");

if( +guess === number){
console.log("correct answer");
}
else{
console.log(`You are wrong. The number is ${number}`);
}
//
const wheather =prompt("guess wheather");
if (wheather === 'sun'){
console.log("It is sunny outside.");
}
else if(wheather === 'rain'){
console.log("It is raining outside.");
}
else if(wheather === 'snow'){
console.log("It is snow outside.");
}
else{
console.log("It is delhi pollution outside.");
}


//Challenge
let correct = 0;
const answer = prompt("Which is the programming language ressemble snake?");
if(answer.toUpperCase()==="PYTHON"){
correct++;
}
const answer1 = prompt("Which is the programming language ressemble coffee?");
if(answer1.toUpperCase()==="JAVA"){
correct++;
}
const answer2 = prompt("Which language is use to Style Webpage?");
if(answer2.toUpperCase()==="CSS"){
correct++;
}
const answer3 = prompt("Which is the backend programming Language used in Salesforce?");
if(answer3.toUpperCase()==="APEX"){
correct++;
}
const answer4 = prompt("Which Language is the old way to make a webpage?");
if(answer4.toUpperCase()==="HTML"){
correct++;
}
//Rank Decision
if(correct == 5){
rank = "GOLD";
}
else if(correct >= 3){
rank = "SILVER";

}
else if(correct >= 1){
rank = "BRONZE";

}
else{
rank = "NONE";
}
const message = `<h2>You have given ${correct} correct answer </h2> <Strong>Crown earned is ${rank}</Strong>`;
document.querySelector('main').innerHTML=message;
