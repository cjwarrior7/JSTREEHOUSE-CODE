const myList = document.getElementsByTagName('li');
for(var i=0;i < myList.length;i++){
    myList[i].style.color = 'purple' ;
}
//Element by ClassName
const errornotpurple = document.getElementsByClassName('error-not-purple');
for(var i=0; i < errornotpurple.length; i++){
    errornotpurple[i].style.color = 'red' ;
}