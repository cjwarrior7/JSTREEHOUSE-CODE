const removeItemButton =  document.querySelector('.removeItembutton');
const addItemButton =  document.querySelector('.addItembutton');
var  listItems = document.getElementsByTagName('li');
const myclass1 =  document.querySelector('.List');
removeItemButton.addEventListener('click',() => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});
addItemButton.addEventListener('click',() => {  
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value ;
    ul.appendChild(li);
    addItemInput.value = '';


});
console.log('Hi:'+Array.from(listItems));
// listItems= Array.from(listItems);

for(let i = 0 ; i<listItems.length;i++) {
    console.log('Hi:'+listItems);
    listItems[i].addEventListener('mouseover', () => {
        console.log('Hi:');
        var temp = listItems[i].textContent.toUpperCase() ;
        console.log('temp:' +temp);
        listItems[i].textContent = temp ;
    });

     listItems[i].addEventListener('mouseout', () => {

     listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
}

myclass1.addEventListener('mouseover', (event) => {
    if(event.target.tagName == 'LI'){
    console.log('Hi:');
    var temp = event.target.textContent.toUpperCase() ;
    console.log('temp:' +temp);
    event.target.textContent = temp ;
    }
});

myclass1.addEventListener('mouseout', (event) => {
    if(event.target.tagName == 'LI'){
    event.target.textContent =  event.target.textContent.toLowerCase();
    }
});
// Array.from(listItems).forEach(element => {
//     element.addEventListener('mouseover', () => {
        
//         element.textContent = element.textContent.toUpperCase();
//     });

//      element.addEventListener('mouseout', () => {

//      element.textContent = element.textContent.toLowerCase();
//     });
// });
 