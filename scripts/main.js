function playGame() {
    let choice    = wordOrSentence()
    let score     = 0
    let totalWord = 0
    if (choice === "mots")  {
       score = playBoucleGame(listWords)
        totalWord = listWords.length
    } else {
        score = playBoucleGame(sentence)
        totalWord = sentence.length
    }

    displayResult(score, totalWord)
}

playGame()