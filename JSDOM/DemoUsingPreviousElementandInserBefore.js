const removeItemButton =  document.querySelector('.removeItembutton');
const addItemButton =  document.querySelector('.addItembutton');
var  listItems = document.getElementsByTagName('li');
const myclass1 =  document.querySelector('.List');
const listul = document.querySelector('ul');

listul.addEventListener('click',(event) => {
    console.log("Hi:");
    if(event.target.tagName == 'BUTTON'){
        if(event.target.className == 'remove'){
            let li = event.target.parentNode
            console.log("li:"+li.textContent);
            let ul = li.parentNode
            console.log("ul:"+ul);
            ul.removeChild(li);
        }
        if(event.target.className == 'up'){
            let li = event.target.parentNode
            console.log("li:"+li.textContent);
            let prevLi =li.previousElementSibling;//
           // let nextSib = li.nextSibling;
            console.log("prevli:"+prevLi.textContent);
           // console.log("nextSib:"+nextSib.textContent);
            let ul = li.parentNode
            console.log("ul:"+ul.textContent);
            if(prevLi){
            ul.insertBefore(li,prevLi); // prevLi
            }
        }
        if(event.target.className == 'down'){
            let li = event.target.parentNode
            console.log("li:"+li.textContent);

            let nextSib = li.nextElementSibling;

            console.log("nextSib:"+nextSib.textContent);
            let ul = li.parentNode
            console.log("ul:"+ul.textContent);
            if(nextSib){
            ul.insertBefore(nextSib,li); 
            }
        }


    }
});