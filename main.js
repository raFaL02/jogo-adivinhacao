const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// events
btnTry.addEventListener('click', handleTryClick)  
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', btnEnter)

// callback functions
function handleTryClick(event) {
  event.preventDefault()
  
  const inputNumber = document.querySelector("#inputNumber");

  if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert('Insira um número válido entre 0 e 10')
  }

  if(Number(inputNumber.value.length) < 1) {
    alert("Insira um número válido")
    inputNumber.focus()
    return false
  }


  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function btnEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}