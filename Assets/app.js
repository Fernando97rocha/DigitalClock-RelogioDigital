const body = document.querySelector('body')
const clockDiv = document.querySelector('.clock-container')
const dayDiv = document.querySelector('.day-container')
const mainContainer = document.querySelector('.main-container')
const darkLightMode = document.querySelector('#darkLight-mode')

// função mostra as horas
const currentHour = () => {
  const completeDate = new Date()
  const hours = completeDate.getHours()
  const minutes = completeDate.getMinutes()
  const seconds = completeDate.getSeconds()

  const showHours = `
    <span>${String(hours).length === 1 ? `0${hours}` : hours}</span>:
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span>:
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
  `
  clockDiv.innerHTML = showHours
}
currentHour()//Para que a aplicação já comece executando a hora antes do setInterval.

const refreshHours = setInterval(currentHour, 1000)


// Função mostra a data
const currentDay = () => {
  const completeDate2 = new Date()
  const day = completeDate2.getDate()
  const month = (completeDate2.getMonth() + 1)
  const year = completeDate2.getFullYear()

  const date = `
    <div class="day-span">${String(day).length === 1 ? `0${day}` : day}/
    ${String(month).length === 1 ? `0${month}` : month}/
    ${String(year).length === 1 ? `0${year}` : year}</div>
  `
  
  dayDiv.innerHTML = date
}

currentDay()

// Função botão light/dark mode
darkLightMode.addEventListener('click', event => {
  const clickedElement = event.target

//primeiro if dark para light
  if (clickedElement.className === 'dark-mode-active') {
    clickedElement.setAttribute('class', 'light-mode-active')
    clickedElement.innerText = 'dark mode'

    body.setAttribute('class', 'body-light')
    mainContainer.setAttribute('class', 'main-container-light')
    clockDiv.setAttribute('class', 'clock-container-light')
    dayDiv.setAttribute('class', 'day-container-light')

//else if light para dark
  } else if (clickedElement.className === 'light-mode-active') {
    clickedElement.setAttribute('class', 'dark-mode-active')
    clickedElement.innerText = 'light mode'

    body.removeAttribute('class', 'body-light')
    mainContainer.setAttribute('class', 'main-container')
    clockDiv.setAttribute('class', 'clock-container')
    dayDiv.setAttribute('class', 'day-container')

  }
})