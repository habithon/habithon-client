//import { checkUser } from "./utils.js";
//checkUser();

//console.log("hello")
const waterModal = document.querySelector("#water-modal")
const exerciseModal = document.querySelector("#exercise-modal")
const readModal = document.querySelector("#read-modal")
const sleepModal = document.querySelector("#sleep-modal")

document.addEventListener('click', (e)=>{
   
    if(e.target.id == 'water-habit'){
        console.log('hello')
        waterModal.style.display = 'flex'
      
    }else if(e.target.id == 'exercise-habit'){
        console.log('hello')
        exerciseModal.style.display = 'flex'
      
    }else if(e.target.id == 'read-habit'){
        console.log('hello')
        readModal.style.display = 'flex'
      
    }else if(e.target.id == 'sleep-habit'){
        console.log('hello')
        sleepModal.style.display = 'flex'
      
    }
   
})
