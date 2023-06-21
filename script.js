let listWords = ["Cachalot", "Pétunia","Serviette"];
let sentence  = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let score = 0;
let choice = prompt ("Veuillez choisir la liste : mots ou phrases")
while(choice !== "mots" && choice !== "phrases") {
    choice = prompt ("Veuillez choisir la liste : mots ou phrases")
}

if(choice === "mots") {
    for(let i = 0; i < listWords.length; i++) {
        let userWord = prompt("Entrez le mot " + listWords[i])
        if (userWord === listWords[i]){
            score++
        }
    }
} else {
    for(let i = 0; i < sentence.length; i++) {
        let userWord = prompt("Entrez la phrase " + sentence[i])
        if (userWord === sentence[i]){
            score++
        }
    }
}

alert("vous avez " + score + " Points")

