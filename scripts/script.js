function displayResult(score, totalWord){
  let spanScore = document.querySelector(".zoneScore span")
  let displayyScore = `${score} / ${totalWord}`
  spanScore.innerText = displayyScore
}


function displayProposition (proposition) {
    let zone = document.querySelector(".zoneProposition")
    zone.innerText = proposition
}

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je vais de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function validerNom (nom) {
    if (nom.length >= 2) {
        return true 
    } 
    return false
}

function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (emailRegExp.test(email)) {
        return true 
    }
    return false 
}

function playGame() {
    let i         = 0
    let score     = 0
    let totalWord = 0
    let propositionList = listWords
    let btnClick = document.getElementById("btnValiderMot")
    let inputWrite = document.getElementById("inputEcriture")
    displayProposition(propositionList[i])
    btnClick.addEventListener("click", () => {
        console.log(inputWrite.value)
        if (inputWrite.value === propositionList[i]) {
            score++
        }
        i++
        displayResult(score, i)
        inputWrite.value = ""
        if(propositionList[i] === undefined) {
            displayProposition("Le jeu est fini")
            btnClick.disabled = true
        } else {
            displayProposition(propositionList[i])
        }

    })

    let changeGame = document.querySelectorAll(".optionSource input")
    for (let index = 0; index < changeGame.length; index++) {
        changeGame[index].addEventListener("change", (event) => {
            console.log(event.target.value)
            if (event.target.value === "1"){
                propositionList = listWords
            } else {
                propositionList = sentence
            }
            displayProposition(propositionList[i])
        } )
    }

    let form = document.querySelector('form')

    form.addEventListener("submit", (event) => {
        event.preventDefault()
    

    let nom   = document.getElementById("nom").value;
    let email = document.getElementById("email").value

    if (validerEmail(email) && validerNom(nom)) {
        let scoreEmail = `${score} / ${i}`
        afficherEmail(nom, email, scoreEmail)
    } else {
        console.log('Erreur')
    }


})

    displayResult(score, i)
}




