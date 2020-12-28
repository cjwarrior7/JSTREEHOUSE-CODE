const stringtoShout = prompt("What do you want to shout");
const shout = stringtoShout.toUpperCase();
const shoutmsg = `<h2>The Message to shout is: ${shout}!!</h2>`;
document.querySelector('p').innerHTML=shoutmsg // inner html is property that replace existing content with new content