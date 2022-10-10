/* change toggle card view */
document.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", () => {
    const cardWidth = document.querySelector(".card")
    for (let index = 0; index < elements.length; index += 1) {
      const element = elements[index]
      element.style.width = e.dataset.size
      // console.log(element.textContent)
    }
  })
})
/* view card width */
addEventListener("click", () => {
  const card = document.querySelector(".card")
  const view = document.querySelector(".view")
  const styleCard = window.getComputedStyle(card)
  let paddingCard = parseInt(styleCard.paddingLeft) + parseInt(styleCard.paddingRight)
  view.innerHTML = styleCard.width + " & padding-total: " + paddingCard + "px"
  // console.log(style.width)
})

/* get style on with loop */
const elements = document.querySelectorAll(".card")

// for (let index = 0; index < elements.length; index += 1) {
//   const el = elements[index]
// }
// console.log(el.style)
// console.log(el.textContent)

// elements.forEach((el) => console.log(el.style))

/* add class test */
elements.forEach((el, index) => {
  if (index === 1) {
    el.classList.add('classic');
  }

});