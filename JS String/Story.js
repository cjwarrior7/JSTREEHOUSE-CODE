 const adjective = prompt("Enter adjective");
 const verb = prompt("Enter verb");
 const noun = prompt("Enter noun ");
 const message = `<p>Programming Language ${adjective} `+`is like ${verb} `+`we called it ${noun}</p>`;
 document.querySelector('main').innerHTML=message;
