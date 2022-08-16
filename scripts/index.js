



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

    console.log([...payload])

    fetch('http://localhost:3000', {

method: 'POST',
body:payload,
})

    .then(res => res.json())
    .then(data => console.log(data))
    .then(err => console.log(err))

})


subBtn.addEventListener('click', ()=>{
    
    modalBackdrop.style.left = '-400px'
   
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
    
    var elementToRename = document.getElementById("form-key");
    var elementToRenam = document.getElementById("label-text");
    
    if(e.target.id == 'water'){
        modalHandler()
        elementToRename.setAttribute("name","water");
        elementToRenam.textContent = 'Drink 2ltr Water'
        
    } else if(e.target.id == 'exercise'){
        modalHandler()
        elementToRename.setAttribute("name","exercise");
        elementToRenam.textContent = 'Exercise'
        
    } else if(e.target.id == 'sleep'){
        modalHandler()
        elementToRename.setAttribute("name","sleep");
        elementToRenam.textContent = 'Sleep 8 hours'
        
    }else if(e.target.id == 'read'){
        modalHandler()
        elementToRename.setAttribute("name","read");
        elementToRenam.textContent = 'Read'
        
    }else if(e.target.id == 'gaming'){
        modalHandler()
        elementToRename.setAttribute("name","gaming");
        elementToRenam.textContent = 'Gaming'
        
    }else if(e.target.id == 'study'){
        modalHandler()
        elementToRename.setAttribute("name","Study");
        elementToRenam.textContent = 'Study'
        
    }else;
})
    





