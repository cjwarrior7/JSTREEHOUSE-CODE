function generateRandom(){
    const num = Math.floor(Math.random( )*6)+1;
    alert(num);
    return num;

}
generateRandom(); 
/* Function always return undefined even if they does not have return statement
Undefined means no return value Specified
*/
