function displayResult(score, totalWord){
    let resultat = alert("vous avez " + score + " points " + "Sur " + totalWord )
}

function wordOrSentence() {
    let choice = prompt ("Veuillez choisir la liste : mots ou phrases")
while(choice !== "mots" && choice !== "phrases") {
    choice = prompt ("Veuillez choisir la liste : mots ou phrases")
}
return choice
}

function playBoucleGame(propositionList) {
    let score = 0
    for(let i = 0; i < propositionList.length; i++) {
        let userWord = prompt("Entrez le mot : " + propositionList[i])
        if (userWord === propositionList[i]){
            score++
        }
    }
    return score
}



