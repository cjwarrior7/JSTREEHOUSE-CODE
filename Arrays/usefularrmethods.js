var search;
var cars = ["BMW","SCORPIO","SWIFT","THAR"]
cars.push("ALTO");// insert in last of array
cars.push("MGHECTOR","WAGONR");// insert more than one element in last of array
cars.unshift("NANO");  // insert in very first position 0 index of array
cars.unshift("SWIFT","DZIRE");  // insert more than one in very first position 0 index of array
cars.pop();//remove last element from array and return it
cars.shift();//remove first element from array and return it
function displayMessage(message){
    document.write('<p>'+message+'</p>');  
}
while(true){
    search= prompt("Enter list or type quit to close this")
    search = search.toLowerCase();
    if(search === 'quit'){
      break;
    }
    else if(search === 'list'){
        displayMessage(cars.join(','));
      
    }
    else{
        if(cars.indexOf(search) > -1){
            displayMessage('Yes ,we have'+search +'in the Store');
        }
        else{
            displayMessage(`NO we do'not have ${search} in the Store`);
        }
    }
    
}