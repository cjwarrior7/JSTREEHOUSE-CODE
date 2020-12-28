const person = {
    name:'cjwarrior7' ,
    city:'Delhi' ,
    age:24 ,
    skills:['HTML','CSS','JS']
};
console.log(`HI ${person.name}`);
person.name = 'duke'; // object name is changed to duke
person.cataegory = 'general'; //cataegory is also added to object
console.log(`HI ${person.skills.length} skills my age ${person.age+1} and my skills ${person.skills.join(',')}`);

// for in loop
for(let per in person){
    console.log(`${per} ${person[per]}`);
}

// Object methods
console.log(person.keys());
console.log(person.keys().length);
// Store the `person` object's property values in `personVals`
const personVals = Object.values(person); 
console.log(personVals);
//handy spread operator
const name = {
    firstName: 'Reggie',
    lastName: 'Williams',
  };
  
  const role = {
    title: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true
  };
  
  // merge `name` and `role` into a `person` object
  const person1 = {  
    ...name,
    ...role
  };
  console.log(person1);