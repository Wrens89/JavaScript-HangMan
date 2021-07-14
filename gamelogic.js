// function displayWordSoFar(word, guesses) {
//   // WRITE ME
//   return word.length;
//   // Een variabele die vaker gebruikt kan worden.
//   let displayedWord = "";
//
//   // Een for-loop
//   for (let i = 0; i < word.length; i++) {
//     //variabele met letter
//     const letter = word[i];
//
//     //zit de letter in array
//     const isGuessed = guesses.includes(letter);
//
//     //zo ja? Toevoegen aan string met een if-statement
//     if (isGuessed) {
//       const toAdd = letter + " ";
//       displayedWord += toAdd;
//     }
//     //Zo nee:
//     else {
//       displayedWord += "_ ";
//     }
//   }
//
//   return displayedWord;
//
// }

function displayWordSoFar(word, guesses) {
  let displayedWord = "";
  const splitWord = word.split("");

  for (let i = 0; i < splitWord.length; i++) {
    if (guesses.includes(splitWord[i])) {
      displayedWord = displayedWord + splitWord[i] +" ";
    } else {
      displayedWord = displayedWord +("_ ");
    }
  }
  return displayedWord;

}

function isGameWon(word, guesses) {
  // WRITE ME

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    if (!guesses.includes(letter)) {
      return false;
    }
  }
      return true;
}

function isGameLost(word, guesses) {
  // WRITE ME
  // Dit itereert door 'guesses' heen
  let splitWord = [];

  for (let i = 0; i < word.length; i++) {
    // als er geen geraden letter in het woord zit, gaat erbij de 'counter' er een bij (+1)

    let letter = word[i];
    splitWord.push(letter);
   console.log(splitWord);
  }

  counter = 0;
  for (let i = 0; i < guesses.length; i++) {
    if (!splitWord.includes(guesses[i])) {
      counter++;
    }
  }
  if (counter >= 7) {
    return true;
  } else {
    return false;
  }
  // Als de counter 7 is (true)
}

function isItASingleLetter(letter) {
  if (letter.length > 1 || letter.length < 1) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
