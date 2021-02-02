let popup = document.querySelector('.popup')
let contentMain = document.querySelector('.content')
let openPopupButton = document.querySelector('.content__button')
let closePopupButton = popup.querySelector('.popup__button')
let stepOneButton = document.querySelector('.content__button-uppertyk')
let stepTwoButton = document.querySelector('.content__button-lowertyk')
let stepThreeButton = document.querySelector('.content__button-question')
let cardSubtitle = document.querySelector('.content__subtitle')
let cardMainText = document.querySelector('.content__main-text')

function openStepOne() {
  cardSubtitle.classList.add('content__subtitle_opened')
  stepOneButton.classList.add('content__button-uppertyk_hidden')
  stepTwoButton.classList.toggle('content__button-lowertyk_hidden')
}

function openStepTwo() {
  cardMainText.classList.add('content__main-text_opened')
  stepTwoButton.classList.toggle('content__button-lowertyk_hidden')
  stepThreeButton.classList.toggle('content__button-question_hidden')
}

function openStepThree() {
  openPopupButton.classList.add('content__button_opened')
  stepThreeButton.classList.toggle('content__button-question_hidden')
}

function showPresent() {
  const presentButton = document.querySelector('#present').content
  contentMain.append(presentButton)
}

function popupOpen() {
  popup.classList.toggle('popup_opened')
  showPresent()
}

stepOneButton.addEventListener('click', openStepOne)
stepTwoButton.addEventListener('click', openStepTwo)
stepThreeButton.addEventListener('click', openStepThree)
closePopupButton.addEventListener('click', popupOpen)
openPopupButton.addEventListener('click', popupOpen)
