const getRandomNumber = function(upper){  //Anonymous function
    const num = Math.floor(Math.random( )*upper)+1;
    alert(upper);
    return upper;

};

//above we are assigning as a value to getRandomNumber therefore we are using semicolon after that
getRandomNumber(10);
