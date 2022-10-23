/**
 * Card
 */
const elements = document.querySelectorAll(".card")

/* change toggle card view */
document.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", () => {
    for (let index = 0; index < elements.length; index += 1) {
      const element = elements[index]
      element.style.width = e.dataset.size
      // console.log(element.textContent)
    }
    const card = document.querySelector(".card")
    const view = document.querySelector(".view")
    const styleCard = window.getComputedStyle(card)
    let paddingCard =
      parseInt(styleCard.paddingLeft) + parseInt(styleCard.paddingRight)
    view.innerHTML = styleCard.width + " & padding-total: " + paddingCard + "px"
  })
})

// Resize Width
function widthCalculation() {
  const wrapElement = document.querySelector(".wrap")
  const styleW = window.getComputedStyle(wrapElement)
  const windowView = document.querySelector(".windowView")
  windowView.textContent = styleW.width
}

widthCalculation()

window.onresize = function () {
  widthCalculation()
}
/* view card width

addEventListener("click", () => {
  const card = document.querySelector(".card")
  const view = document.querySelector(".view")
  const styleCard = window.getComputedStyle(card)
  let paddingCard =
  parseInt(styleCard.paddingLeft) + parseInt(styleCard.paddingRight)
  view.innerHTML = styleCard.width + " & padding-total: " + paddingCard + "px"
})
*/

/* add class test */
elements.forEach((el, index) => {
  // if (index === 1) {
  el.classList.add("card-" + (index + 1))
  // }
})
