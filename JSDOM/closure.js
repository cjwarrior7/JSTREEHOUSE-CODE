function count(){
    var initial = 1;
     function plus(){
        console.log(++initial);
    }
    plus();
}
count();
//closure when function get scope of outer fuction is called closure
function count1(){
    var initial = 1;
     function plus1(){
        console.log(++initial);
    }
    return plus1();
}
var c = count1();
c.plus();
c.plus();

function count2( parameter ){ // local scope of outer function 
    var initialvar = parameter ; // localvariables
     function plus2(){  // closure scope
        console.log(++initialvar);
    }
    return plus2();
}
var c2 = count2(10);
c2();
c2();

function count4( parameter1,parameter2 ){
    return {up(){
        parameter1 +=  parameter2;
        console.log(parameter1); 
    },
    down(){
        parameter1 -=  parameter2;
        console.log(parameter1); 
    }
}
}
var c2 = count4(10,2);
c2.up();
c2.up();
c2.down();