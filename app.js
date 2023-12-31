import data from "./data.json" assert{type: "json"}

// Declaring the items from the JSON file individually
let card_1= data[0]
let card_2= data[1]
let card_3= data[2]
let card_4= data[3]
let card_5= data[4]
let card_6= data[5]
// Declaring the card in the HTML file individually
const work = document.querySelector(".work_container")
const play = document.querySelector(".play_container")
const study = document.querySelector(".study_container")
const exercise = document.querySelector(".exercise_container")
const social = document.querySelector(".social_container")
const selfCare = document.querySelector(".selfCare_container")
// Declaring the Buttons in the HTML File
const buttons = document.querySelectorAll(".nav_btn")
const day = document.querySelector(".day")
const week = document.querySelector(".week")
const month = document.querySelector(".month")

// Adding Title to the HTML file
 work.firstElementChild.firstElementChild.innerHTML = card_1.title
 play.firstElementChild.firstElementChild.innerHTML = card_2.title
 study.firstElementChild.firstElementChild.innerHTML = card_3.title
 exercise.firstElementChild.firstElementChild.innerHTML = card_4.title
 social.firstElementChild.firstElementChild.innerHTML = card_5.title
 selfCare.firstElementChild.firstElementChild.innerHTML = card_6.title

// Adding The default data in the HTML file
// WORK
work.lastElementChild.firstElementChild.innerHTML = `${card_1.timeframes.weekly.current}hrs`
work.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_1.timeframes.weekly.previous}hrs`

// PLAY
play.lastElementChild.firstElementChild.innerHTML = `${card_2.timeframes.weekly.current}hrs`
play.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_2.timeframes.weekly.previous}hrs`

// STUDY
study.lastElementChild.firstElementChild.innerHTML = `${card_3.timeframes.weekly.current}hrs`
study.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_3.timeframes.weekly.previous}hrs`

// EXERCISE
exercise.lastElementChild.firstElementChild.innerHTML = `${card_4.timeframes.weekly.current}hrs`
exercise.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_4.timeframes.weekly.previous}hrs`

// SOCIAL
social.lastElementChild.firstElementChild.innerHTML = `${card_5.timeframes.weekly.current}hrs`
social.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_5.timeframes.weekly.previous}hrs`

// SELF CARE
selfCare.lastElementChild.firstElementChild.innerHTML = `${card_6.timeframes.weekly.current}hrs`
selfCare.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_6.timeframes.weekly.previous}hrs`
















//  Click Event
buttons.forEach((button) =>{

  button.addEventListener("click", () =>{
    if (button.classList.contains("day")) {
            // STYLING
      week.classList.remove("active")
      month.classList.remove("active")
      day.classList.add("active")
      // WORK
      work.lastElementChild.firstElementChild.innerHTML = `${card_1.timeframes.daily.current}hrs`
      work.lastElementChild.lastElementChild.innerHTML = `Yesterday - ${card_1.timeframes.daily.previous}hrs`

      // PLAY
      play.lastElementChild.firstElementChild.innerHTML = `${card_2.timeframes.daily.current}hrs`
      play.lastElementChild.lastElementChild.innerHTML = `Yesterday - ${card_2.timeframes.daily.previous}hrs`

      // STUDY
      study.lastElementChild.firstElementChild.innerHTML = `${card_3.timeframes.daily.current}hrs`
      study.lastElementChild.lastElementChild.innerHTML = `Yesterday - ${card_3.timeframes.daily.previous}hrs`

      // EXERCISE
      exercise.lastElementChild.firstElementChild.innerHTML = `${card_4.timeframes.daily.current}hrs`
      exercise.lastElementChild.lastElementChild.innerHTML = `Yesterday - ${card_4.timeframes.daily.previous}hrs`

      // SOCIAL
      social.lastElementChild.firstElementChild.innerHTML = `${card_5.timeframes.daily.current}hrs`
      social.lastElementChild.lastElementChild.innerHTML = `Yesterday - ${card_5.timeframes.daily.previous}hrs`

      // SELF CARE
      selfCare.lastElementChild.firstElementChild.innerHTML = `${card_6.timeframes.daily.current}hrs`
      selfCare.lastElementChild.lastElementChild.innerHTML = `Yesterday - ${card_6.timeframes.daily.previous}hrs`

    } else if (button.classList.contains("week")){

      // STYLING
      day.classList.remove("active")
      month.classList.remove("active")
      week.classList.add("active")
      // WORK
      work.lastElementChild.firstElementChild.innerHTML = `${card_1.timeframes.weekly.current}hrs`
      work.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_1.timeframes.weekly.previous}hrs`

      // PLAY
      play.lastElementChild.firstElementChild.innerHTML = `${card_2.timeframes.weekly.current}hrs`
      play.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_2.timeframes.weekly.previous}hrs`

      // STUDY
      study.lastElementChild.firstElementChild.innerHTML = `${card_3.timeframes.weekly.current}hrs`
      study.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_3.timeframes.weekly.previous}hrs`

      // EXERCISE
      exercise.lastElementChild.firstElementChild.innerHTML = `${card_4.timeframes.weekly.current}hrs`
      exercise.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_4.timeframes.weekly.previous}hrs`

      // SOCIAL
      social.lastElementChild.firstElementChild.innerHTML = `${card_5.timeframes.weekly.current}hrs`
      social.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_5.timeframes.weekly.previous}hrs`

      // SELF CARE
      selfCare.lastElementChild.firstElementChild.innerHTML = `${card_6.timeframes.weekly.current}hrs`
      selfCare.lastElementChild.lastElementChild.innerHTML = `Last Week - ${card_6.timeframes.weekly.previous}hrs`
    } else {
      // STYLING
      week.classList.remove("active")
      day.classList.remove("active")
      month.classList.add("active")
      // WORK
      work.lastElementChild.firstElementChild.innerHTML = `${card_1.timeframes.monthly.current}hrs`
      work.lastElementChild.lastElementChild.innerHTML = `Last Month - ${card_1.timeframes.monthly.previous}hrs`

      // PLAY
      play.lastElementChild.firstElementChild.innerHTML = `${card_2.timeframes.monthly.current}hrs`
      play.lastElementChild.lastElementChild.innerHTML = `Last Month - ${card_2.timeframes.monthly.previous}hrs`

      // STUDY
      study.lastElementChild.firstElementChild.innerHTML = `${card_3.timeframes.monthly.current}hrs`
      study.lastElementChild.lastElementChild.innerHTML = `Last Month - ${card_3.timeframes.monthly.previous}hrs`

      // EXERCISE
      exercise.lastElementChild.firstElementChild.innerHTML = `${card_4.timeframes.monthly.current}hrs`
      exercise.lastElementChild.lastElementChild.innerHTML = `Last Month - ${card_4.timeframes.monthly.previous}hrs`

      // SOCIAL
      social.lastElementChild.firstElementChild.innerHTML = `${card_5.timeframes.monthly.current}hrs`
      social.lastElementChild.lastElementChild.innerHTML = `Last Month - ${card_5.timeframes.monthly.previous}hrs`

      // SELF CARE
      selfCare.lastElementChild.firstElementChild.innerHTML = `${card_6.timeframes.monthly.current}hrs`
      selfCare.lastElementChild.lastElementChild.innerHTML = `Last Month - ${card_6.timeframes.monthly.previous}hrs`
    }
  })
})