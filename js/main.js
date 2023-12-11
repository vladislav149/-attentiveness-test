const UI = {
  SVG_ELEMENT: document.querySelectorAll('.svg-elem')
}

UI.SVG_ELEMENT.forEach(e => e.addEventListener('click', selectBlock))

let currentCount = 1

function selectBlock() {
  console.log(+this.textContent.trim())
}
