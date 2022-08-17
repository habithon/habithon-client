import { checkUser, logout, getGoals } from "./utils.js";
checkUser();

const subBtn = document.getElementById("sub-btn")
const modalBackdrop = document.querySelector(".habit-modal-backdrop")
const habitModal = document.querySelector(".habit-modal")
const closeModal = document.querySelector(".close")



const form = document.querySelector('form')


form.addEventListener('submit', function (e){
console.log('hello')

    e.preventDefault()
    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload);

    const arr = [...payload]
    console.log(arr)
    const body = {
        habit: arr[0][0],
        imageUrl: arr[1][0],
        frequency: arr[2][0]
    }

    fetch('https://habithon-server.herokuapp.com/goals', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    },
    body:JSON.stringify(body),
    })

    .then(res => res.json())
    .then(data => window.location.assign("/pages/daily-goals.html"))
    .catch(err => console.log(err))

})


subBtn.addEventListener('click', ()=>{
    
    
   
})



closeModal.addEventListener('click', ()=>{
    
    modalBackdrop.style.left = '-400px'
   
})



function modalHandler(){
    modalBackdrop.style.display = 'block'
    modalBackdrop.style.left = '0px'
    const box = document.querySelectorAll(".check_box")
    box.forEach(b => b.checked = false)
}

document.addEventListener('click', (e)=>{
    
    const elementToRename = document.getElementById("form-key");
    const imageElement = document.getElementById("form-image");
    const elementToRenam = document.getElementById("label-text");
   const id =  e.target.id


    if(id == 'water' || id == 'water-img'){
        modalHandler()
        imageElement.setAttribute('name', 'images/goals-water.jpg')
        elementToRename.setAttribute("name","water");
        elementToRenam.textContent = 'Drink 2ltr Water'
        
    } else if(id == 'exercise' || id == 'exercise-img'){
        modalHandler()
        imageElement.setAttribute('data-image', 'images/goals-exercise.jpg')
        elementToRename.setAttribute("name","exercise");
        elementToRenam.textContent = 'Exercise'
        
    } else if(id == 'sleep' || id == 'sleep-img'){
        modalHandler()
        imageElement.setAttribute('name', 'images/goals-sleep.jpg')
        elementToRename.setAttribute("name","sleep");
        elementToRenam.textContent = 'Sleep 8 hours'
        
    }else if(id == 'read' || id == 'read-img'){
        modalHandler()
        imageElement.setAttribute('name', 'images/goals-reading.jpg')
        elementToRename.setAttribute("name","read");
        elementToRenam.textContent = 'Read'
        
    }else if(id == 'gaming' || id == 'gaming-img'){
        modalHandler()
        imageElement.setAttribute('name', 'images/gaming.jpg')
        elementToRename.setAttribute("name","gaming");
        elementToRenam.textContent = 'Gaming'
        
    }else if(id == 'study' || id == 'study-img'){
        modalHandler()
        imageElement.setAttribute('name', 'images/studying.jpg')
        elementToRename.setAttribute("name","Study");
        elementToRenam.textContent = 'Study'
        
    }else;
})




