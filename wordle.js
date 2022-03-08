const secretWordsArray = ["MARIA","JUDIO","TAPON","BARRO","MOSTO","CIEGO","CIELO","PIANO","ZUBAT"]
let secretWord = secretWordsArray[Math.floor(Math.random() * (secretWordsArray.length))]
const cells = document.querySelectorAll("td")
const button = document.getElementById("validate")
let rowIndex = 0
const submitResponse = () => {
    let response = document.getElementById("input").value.toUpperCase()
    if(response.length === 5){
        
        //Formating row cells with the answer
        for (i = 1; i <= 5; i++){
            cells[(i + 5 * rowIndex) - 1].innerHTML = response[i - 1]

            if(response[i - 1] === secretWord[i - 1]){
                cells[(i + 5 * rowIndex) - 1].style.backgroundColor = "green"
            } else if (secretWord.includes(response[i - 1])){
                cells[(i + 5 * rowIndex) - 1].style.backgroundColor = "#ffd54a"
            }
        }
        rowIndex++;
    
        //IF LOSE
        if (rowIndex >= 6 && secretWord !== response){
            setTimeout(() => alert("Has perdido :("), 300)
            setTimeout(() => cleanSheet(), 1000)
        }
    
        //IF WIN
        if (secretWord === response){
            setTimeout(() => alert("Has ganado"), 300)
            setTimeout(() => cleanSheet(), 1000)
        }

    } else {
        alert("Las palabras deben contener 5 letras")
    }
}

const cleanSheet = () => {
    secretWord = secretWordsArray[Math.floor(Math.random() * (secretWordsArray.length))]
    rowIndex = 0
    for (i = 0; i < cells.length; i++){
        cells[i].innerHTML = ""
        cells[i].style.backgroundColor = "gray"
    }
}


button.addEventListener("click", submitResponse)



