const clockDiv = document.querySelector('.clock-container')
const dayDiv = document.querySelector('.day-container')

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

const refreshHours = setInterval(currentHour, 1000)


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