function isFieldEmpty(){
const field = document.querySelector('#info');
if(field.value=== ''){
    console.log("if");
    return true;
}
else{
    return false;
}
}
if(isFieldEmpty() === true){
    console.log("andar")
alert("Please provide info.")
}
//multiple args
function wantToEat(coffee,icecream){
    console.log(`I want to drink ${coffee} and eat ${icecream} `);
}
wantToEat('Nescafe','vanilla');
//Scope
let person = 'Lee' //Global variables
function greeting1(){
    //Function Scope
    let person = 'Meg';//person ='Meg';//It is not recommended to access global variables inside the function.
    alert(`Hi ${person}`);
}
function greeting2(){
    let person = 'Peg';
    alert(`Hi ${person}`);

}
greeting1();
alert(`Hi ${person}`);
greeting2();

