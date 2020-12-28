function generateRandom(lower,upper){
    if(isNaN(lower) || isNaN(upper)){
        throw new('enter the number correctly.')
    }
    return Math.floor(Math.random()*(upper-lower+1))+lower;

}
console.log(generateRandom()); 
console.log(generateRandom(10,'Twenty')); 
/* Function always return undefined even if they does not have return statement
Undefined means no return value Specified
*/
