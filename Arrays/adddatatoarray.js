var cars = ["BMW","SCORPIO","SWIFT","THAR"]
cars.push("ALTO");// insert in last of array
cars.push("MGHECTOR","WAGONR");// insert more than one element in last of array
cars.unshift("NANO");  // insert in very first position 0 index of array
cars.unshift("SWIFT","DZIRE");  // insert more than one in very first position 0 index of array
cars.pop();//remove last element from array and return it
cars.shift();//remove first element from array and return it


function displayMessage(message){
document.write(message);  
}

function printList(list){
    var displayHtml ='<ol>' ;
    for(var i=0;i<list.length;i++){
        displayHtml +='<li>'+list[i]+'</li>';
    }
    displayHtml +='</ol>';
    displayMessage(displayHtml);
}

printList(cars);
