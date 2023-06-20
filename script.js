let listWords = ["Cachalot", "Pétunia","Serviette"];
let score = 0;
let wordUtilisateur = prompt("Entez le mot :  " + listWords[0]);

if (wordUtilisateur == listWords[0]) {
    score++
}

 wordUtilisateur = prompt("Entez le mot :  " + listWords[1]);

if (wordUtilisateur == listWords[1]) {
    score++
}

wordUtilisateur = prompt("Entez le mot :  " + listWords[2]);

if (wordUtilisateur == listWords[2]) {
    score++
}


console.log(score)

