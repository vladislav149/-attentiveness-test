const UI = {
  SVG_ELEMENT: document.querySelectorAll('.svg-elem'),
  SPAN_RESULT: document.querySelector('.js-result'),
  DIV_RESULT: document.querySelector('.js-div-result')
}
const FINISHING_NUMBER = 90
let currentCount = 0

incrementCount()
UI.SVG_ELEMENT.forEach(e => e.addEventListener('click', selectBlock))

function selectBlock() {
  const elemWithText = this.nextElementSibling
  const onlyTextFromElem = elemWithText.textContent.trim()
  const numberFromText = Number(onlyTextFromElem)
  checkCount(numberFromText)
}

function checkCount(number) {
  if (isFinish(number)) return endGame()
  const isValidNumber = number === currentCount
  if (isValidNumber) return incrementCount()
  showErrorSelect()
}

function incrementCount() {
  const DELAY = 1000
  currentCount++
  UI.SPAN_RESULT.textContent = currentCount
  UI.DIV_RESULT.classList.add('bg-result')
  setTimeout(() => UI.DIV_RESULT.classList.remove('bg-result'), DELAY)
}

function isFinish(number) {
  return number === FINISHING_NUMBER
}

function showErrorSelect(number) {
  alert(`не верно, вы должны найти ${currentCount}`)
}

function endGame() {
  alert('Вы выиграли, перезапустите игру')
}
