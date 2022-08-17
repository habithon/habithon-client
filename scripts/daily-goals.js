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
        <div class="goals-image"> <img src="images/daily-goals-${habit.habit}.jpg" alt=""></div>
        <div class="goals-item-extra"></div>
        <div class='stats-wrapper'> <h2>${habit.habit}</h2>
            <p><strong>Frequency: </strong>  <span>${habit.frequency}</span></p>
            <p><strong>Current streak: </strong>  <span>${habit.streak}</span></p>
            <button class="update-btn">Completed</button>
            <button class="update-btn">Cancel</button>
            <button class="update-btn">Delete</button>
        </div>
        <p class="active">active</p>
        `
        grid.appendChild(div)
    });

})();




console.log("hello")
