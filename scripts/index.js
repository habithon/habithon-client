import { checkUser } from "./utils.js";
checkUser();

const modal = document.querySelector(".stats-modal")
const span = document.querySelector("span")
const water = document.querySelector(".water")
const modalBackdrop = document.querySelector(".habit-modal-backdrop")
const habitModal = document.querySelector(".habit-modal")
const closeModal = document.querySelector(".close")

let habits = [];
const button = document.querySelector('.stats-button')
button.classList.add('disable')
button.disabled = true
const items = document.querySelectorAll('.habit-item')


function pickHabit (e) {
    const index = habits.findIndex((habit) => habit == e.currentTarget.innerText.trim())
    
    if (index == -1) {
        habits.push( e.currentTarget.innerText.trim())
    } else {
        habits.splice(index, 1)
    }
    e.currentTarget.classList.toggle('habit-item-picked')

    if (habits.length === 0) {
        button.classList.add('disable')
        button.disabled = true
    } else {
        button.classList.remove('disable')
        button.disabled = false
    }
}

button.addEventListener('click', () => {
    // const options = {
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(habits)
    // }

    // fetch("http://localhost:3000/users/login", options)
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data["success"]) {
    //         } else {
    //             throw "Unable to authenticate!"
    //         }
    //     })
    //     .catch(err => alert(err))
    window.location.assign('/pages/daily-goals.html')
})

items.forEach((item) => {
    item.addEventListener('click', pickHabit)
})



closeModal.addEventListener('click', ()=>{
    
    modalBackdrop.style.left = '-400px'
   
})





water.addEventListener('click', ()=>{
    
   
        modalBackdrop.style.display = 'block'
        modalBackdrop.style.left = '0px'
})
    


console.log(token)

