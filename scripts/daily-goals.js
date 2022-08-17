const currentWaterStreak = document.querySelector('.current-water-streak')
const currentExerciseStreak = document.querySelector('.current-exercise-streak')
const currentReadStreak = document.querySelector('.current-read-streak')
const currentSleepStreak = document.querySelector('.current-sleep-streak')
const waterActive = document.querySelector('.water-active')

//{
    //"success": true,
    //"token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjA3MjU2MDAsImV4cCI6MTY2MDcyOTIwMH0.//s5aWXEgc-ct4j6h6hyKHMFlJ8P70f5eMV8Syi2WLXKE"
//}

//{token: token, habit: "water", frequency: "daily"}
const url = "https://localhost:3000";

async function getData () {

  try {
    const response = await fetch(url);
    const data = await response.json();
console.log('hello')
    displayData(data);

  } catch (error) {
    alert("Sorry! Your request could not be granted!")
  }
}

getData()



function displayData(data){

    function updateCurrentStreak(){
        currentWaterStreak.textContent = data.water
        currentExerciseStreak.textContent = data.exercise
        currentReadStreak.textContent = data.read
        currentSleepStreak.textContent = data.sleep
    }
    updateCurrentStreak()
    
    
    
    function updateActive(){
        if(data.water == true){
        waterActive.style.display = 'block'
        }
    }
    updateActive()

}
