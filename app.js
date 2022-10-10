document.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", () => {
    // const cardWidth = document.querySelector(".card")
    const elements = document.querySelectorAll(".card")
    for (let index = 0; index < elements.length; index += 1) {
      const element = elements[index]
      element.style.width = e.dataset.size
      console.log(element.textContent)
    }
  })
})

addEventListener("click", () => {
  const cardWidth = document.querySelector(".card")
  const view = document.querySelector(".view")
  const style = window.getComputedStyle(cardWidth)
  view.innerHTML = style.width
  // console.log(style.width)
})

const elements = document.querySelectorAll(".card")
for (let index = 0; index < elements.length; index += 1) {
  const element = elements[index]
  console.log(element.textContent)
}
