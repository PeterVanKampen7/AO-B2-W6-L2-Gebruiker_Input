var amount = Number(prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)"));
var container = document.getElementById("container");
var nameArray = [];
if(amount >= 3){
    for (let i = 0; i < amount; i++) {
        nameArray.push(prompt("Vul een naam in."));
    }
    var printString = "<h2>De ingevoerde namen in de array zijn:<br>";
    for (let i = 0; i < nameArray.length; i++) {
        printString += nameArray[i] + " ";
    }
    printString += "</h2>";
    container.innerHTML += printString;
    printString = "<h2>De ingevoerde namen in de array in omgekeerde volgorde zijn:<br>";
    for (let i = nameArray.length-1; i >= 0; i--) {
        printString += nameArray[i] + " ";
    }
    printString += "</h2>";
    container.innerHTML += printString;
}
else{
    alert("No valid input found");
}