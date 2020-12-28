function sayHello(name ="student"){
    alert(`Hi ${name}`)
}
sayHello();//we can call method without passing parameter

function sayHello(greet='Hello' ,name ="student"){
    alert(`${greet} ${name}`)
}
sayHello(undefined,'Guil');//undefined we use  otherwise it assign 'Guil to greet output Guil student