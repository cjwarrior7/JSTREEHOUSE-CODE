const myButton = document.getElementById('mybutton');
const myHeading = document.getElementById('myheading');
const mytext = document.getElementById('mytext');
myButton.addEventListener('click',() => {
    myHeading.style.color=mytext.value;  
});