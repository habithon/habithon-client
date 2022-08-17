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




const options = {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    },
}

fetch("https://habithon-server.herokuapp.com/goals/", options)
.then(res => res.json())
.then(data => {
    console.log(data)
    if (data["success"]) {
        console.log(data.habits.length)
        if (data.habits.length == 0) {
            window.location.assign("/pages/index.html");
        } 
    } else {
        throw "Unable to authenticate!"
    }
  
})
.catch(err => alert(err)) // TODO in case of an error send back to login page.