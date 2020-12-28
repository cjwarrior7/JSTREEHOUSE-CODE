const mybutton1 = document.getElementById('toggleList');
const myclass1 =  document.querySelector('.List');
const addItemInput = document.querySelector('.addItemInput');
const addItemButton =  document.querySelector('.addItembutton');
const removeItemButton =  document.querySelector('.removeItembutton');

// const myButton =  document.getElementById('mybutton');
// const myHeading = document.getElementById('myheading');
// const mytext = document.getElementById('mytext');
mybutton1.addEventListener('click',() => {
    if(myclass1.style.display == 'none') {
        mybutton1.innerHTML = 'HideList';
        myclass1.style.display = 'block';
    }
    else{
        mybutton1.innerHTML = 'ShowList';
        myclass1.style.display = 'none';
    } 
    
});
addItemButton.addEventListener('click',() => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value ;
    ul.appendChild(li);
    addItemInput.value = '';


});

removeItemButton.addEventListener('click',() => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);



});