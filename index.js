// const is een identifier. Dit is een destructing syntax. Om require(readline-sync) te krijgen hebben we question nodig.
const { question } = require("readline-sync");

//Ook dit is een destructing syntax. Om require(./gamelogic) te verkrijgen hebben we displaySoFar, isGameWon en isGameLost nodig.
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

//functie opvragen letter

function askForLetter () {
    // de letter wordt meteen in kleine letters gezet.
    let letter = question("Raad een letter: ").toLowerCase();

    //Kijken of het een enkele letter is
    while (!isItASingleLetter(letter)) {
        console.log("Je kunt maar een letter tegelijk invoeren.");
        letter = question("Raad een letter: ");
    }
    return letter;
}

//Een function game. Hierbij wordt er gekeken naar hoe vaak de speler al heeft geraden.
function game(word, guesses) {
    console.log("Dit heb je tot nu toe geraden: ", guesses);
    console.log(displayWordSoFar(word, guesses));
    if (isGameWon(word, guesses)) {
        console.log("Gefeliciteerd, je hebt het woord geraden!");
        return;
    }
    if (isGameLost(word, guesses)) {
        console.log("Helaas, je hebt 7 x fout geraden, je hebt het spel verloren.");
        console.log(`\n__________\n| /      |\n|/      _o_\n|        O\n|       | |\n|\n============`);
        return;
    } else {
        if (counter === 1) {
            console.log(`\n\n|\n|\n|\n|\n|\n============`);
        } else if (counter === 2) {
            console.log(`\n\n| /\n|/\n|\n|\n|\n============`);
        } else if (counter === 3) {
            console.log(`\n__________\n| /\n|/\n|\n|\n|\n============\``);
        } else if (counter === 4) {
            console.log(`\n__________\n| /      |\n|/\n|\n|\n|\n============`);
        } else if (counter === 5) {
            console.log(`\n__________\n| /      |\n|/      _o_\n|\n|\n|\n============`);
        } else if (counter === 6) {
            console.log(`\n__________\n| /      |\n|/      _o_\n|        O\n|\n|\n============`)
        }
    }


//Een 'gewone' identifier. Letter = question.
    const letter = question("Raad een letter: ");

    // voeg de geraden letter toe aan de array met guesses
    guesses.push(letter);

    // volgende ronde! we roepen game nog een keer aan
    game(word, guesses);

}
console.log(`
__________
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
