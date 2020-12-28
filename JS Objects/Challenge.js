const god =[
    {name:'shivji',photo:'img/Shivji.jpg'},
    {name:'vishnuji',photo:'img/Vishnu-1483549444_835x547.jpg'},
    {name:'hanumanji',photo:'img/hanumanji.jpg'},
    {name:'ganeshji',photo:'img/ganeshji.jpeg'}
]
let html=''
for(i=0;i<god.length;i++){

    html+= `<h2>${god[i].name}</h2>`;
    html+=`<img src="${god[i].photo}" alt="${god[i].name}">`;
}
console.log(html);
const main = document.querySelector('main');
main.insertAdjacentHTML('beforeend',html);