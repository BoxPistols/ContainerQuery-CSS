{
  /* --- resize width --- */
  const widthCalculation = () => {
    const wrapElement = document.querySelector(".wrap")
    const styleW = window.getComputedStyle(wrapElement)
    const windowView = document.querySelector(".windowView")
    windowView.textContent = styleW.width
  }

  widthCalculation()

  /* --- card --- */
  const elements = document.querySelectorAll(".card")
  // @note result view card width

  const widthCards = () => {
    const card = document.querySelector(".card")
    const view = document.querySelector(".view")
    const styleCard = window.getComputedStyle(card)
    let paddingCard =
      parseInt(styleCard.paddingLeft) + parseInt(styleCard.paddingRight)
    view.innerHTML = parseInt(styleCard.width) + " & padding-total: " + paddingCard + "px"
  }
  widthCards()

  window.onresize = function () {
    widthCalculation()
    widthCards()
  }

  /* change toggle card view */
  document.querySelectorAll("button").forEach((e) => {
    e.addEventListener("click", () => {
      // @note click button & change card size
      for (let index = 0; index < elements.length; index += 1) {
        const element = elements[index]
        element.style.width = e.dataset.size
        // console.log(element.textContent)
      }
      widthCards()
    })
  })

  /* add class test */
  elements.forEach((el, index) => {
    // if (index === 1) {
    el.classList.add("card-" + (index + 1))
    // }
  })
}
