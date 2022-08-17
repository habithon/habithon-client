import { checkUser, logout, getGoals} from "./utils.js";
checkUser();
logout();

(async () => {
    const habits = await getGoals()
    console.log(habits)
    const grid = document.querySelector(".goals-grid")
    
    habits.forEach(habit => {

        const div = document.createElement('div')
        div.classList.add("goals-item")
        div.innerHTML = ` 
        <img src="images/goals-water.jpg" alt="">
        <div class='stats-wrapper'> <h2>${habit.habit}</h2>
            <p><strong>Frequency: </strong>  <span>${habit.frequency}</span></p>
            <p><strong>Current streak: </strong>  <span>${habit.streak}</span></p>
        </div>
        <p class="active">active</p>
        `
        grid.appendChild(div)
    });
    
})();




console.log("hello")
