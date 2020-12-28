const getRandomNumber = () => {  
    const num = Math.floor(Math.random( )*6)+1;
    alert(num);
    //return upper;

};

getRandomNumber();
//with Parameter
const getRandomNumber = (upper) => {  
    const num = Math.floor(Math.random( )*upper)+1;
    alert(num);
    return num;

};

getRandomNumber(10);

// Arrow functions with one parameter
const square = x => {
    return x * x;
  }
  
  square(10);
// * without parantheses it will give Syntax error keep in mind
  const getArea = (width, length, unit) => {
    const area = width * length;
    return `${area} ${unit}`;
  }
  
  getArea(10, 20, 'sq ft');  // 200 sq ft

/*When you omit the return keyword in a single-line function, the value is returned automatically (or implicitly). This is called an implicit return.
In fact, when using an implicit return, you don't even need the curly braces (they are optional). You can reduce the arrow syntax further by writing the function like this:*/
const square = x => x * x;

const multiply = (x, y) => x * y;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

//Single-line Functions with No Parameters
//use paranthesis(()) otherwise will get Syntax error
const name = 'Jesse';
const greeting = () => alert(`Greetings, ${name}!`);
