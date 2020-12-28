const input = document.querySelector('input')
const  p = document.querySelector('p.description')
const button = document.querySelector('button')

button.addEventListener('click',() => {
p.textContent = input.value + ':'; // we can also replace textContent by innerHTML
});
//p.title = 'List description';// changing element attributes
document.get