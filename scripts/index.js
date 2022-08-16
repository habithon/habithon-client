const modal = document.querySelector(".stats-modal")
const span = document.querySelector("span")
const water = document.querySelector(".water")
const modalBackdrop = document.querySelector(".habit-modal-backdrop")
const habitModal = document.querySelector(".habit-modal")
const closeModal = document.querySelector(".close")


closeModal.addEventListener('click', ()=>{
    
    modalBackdrop.style.left = '-400px'
   
})





water.addEventListener('click', ()=>{
    
   
        modalBackdrop.style.display = 'block'
        modalBackdrop.style.left = '0px'
})
    




