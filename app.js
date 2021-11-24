'use strict'

const puzzleEl = document.querySelector(`#puzzle`)
const guessesEl = document.querySelector(`#guesses`)

const game1 = new Hangman(`Ruchanie`, 4)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatus()
console.log(game1.status)

window.addEventListener(`keypress`, function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatus()
    console.log(game1.status)
    
})





