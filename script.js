const buttons = document.querySelectorAll('.inputElements')
const calculatorInput = document.getElementById('calculatorInput')
const evaluateBtn = document.querySelectorAll('.evaluate')
const clearBtn=document.querySelectorAll('.clear')

buttons.forEach((btn, idx) => {
  btn.addEventListener('click', () => buttonClick(btn))
})

evaluateBtn.forEach((btn, idx) => {
 btn.addEventListener('click', () => evaluate())
})

clearBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => clearInput())
})

function buttonClick(btn) {
  calculatorInput.innerHTML += btn.innerHTML
}

function evaluate() {
  calculatorInput.innerHTML += " = " + eval(calculatorInput.innerHTML)
}

function clearInput() {
  calculatorInput.innerHTML = ""
}
