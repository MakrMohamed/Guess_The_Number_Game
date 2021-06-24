let persoon = prompt("Welkom! Wat is je naam?");
alert("Hey " + persoon);


let inputNumber = 25;
let getRandom = Math.floor(Math.random() * inputNumber) + 1;


let guess = prompt("Voer een nummer in van 0 tot " + inputNumber + " om te beginnen met raden...");


for (i = 0; i < 100; i++) {
    if (getRandom == guess) {
        alert("Gefeliciteerd! Je hebt gewonnen!") + alert("Dag " + persoon, "Tot de volgende keer");
        break;
    } else {
        alert("Dat is niet correct");
        guess = prompt("Probeer het nog eens");
    }
}