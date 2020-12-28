// window object
//document is property of window object and a global object representing html and content of webpage
/*
document.getElementById('myheading').style.color='purple'
document.getElementById('myheading').style.backgroundColor='yellow'
*/
const myHeading = document.getElementById('myheading')
myHeading.addEventListener('click',() => {
    myHeading.style.color='red'   
});

 