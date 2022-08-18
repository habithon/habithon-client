import { checkUser, logout, getGoals } from "./utils.js";
checkUser();
logout();

const deleteElement = (e) => {

  const options = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  const id = e.target.dataset.habit;
  fetch("https://habithon-server.herokuapp.com/goals/" + id, options)
  .then(res => {console.log(res); location.reload();})
};

const completedHabit = (e) => {
  const number = parseInt(e.currentTarget.dataset.streak) +1
  const streak = {streak: number}
  const options = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(streak)
  };
  const id = e.target.dataset.habit;
  fetch("https://habithon-server.herokuapp.com/goals/" + id, options)
  .then(res => {console.log(res); location.reload()});
};

(async () => {
  const habits = await getGoals();
  const grid = document.querySelector(".goals-grid");

  habits.forEach((habit) => {
    const div = document.createElement("div");
    div.classList.add("goals-item");
    div.innerHTML = ` 
        <div class="goals-image"> <img src="images/daily-goals-${habit.habit}.jpg" alt=""></div>
        <div class="goals-item-extra"></div>
        <div class='stats-wrapper'><h1>${habit.habit.toLowerCase()}</h1><p>Frequency:<span>${habit.frequency}</span></p></div>
        <p><strong>STREAK: </strong><span class="streak-number">${habit.streak}</span></p>
        <div class='update-modal hidden'>
          <button class="update-btn completed"  data-streak="${habit.streak}" data-habit="${habit.id}">Completed</button>
          <button class="update-btn deleteBtn" data-habit="${habit.id}">Delete</button>
        </div>
        `;
    grid.appendChild(div);
  });
  const goalItems = document.querySelectorAll(".goals-item");
  for (let item of goalItems) {
    item.addEventListener("click", (e) => {
      const clickedGoal = e.currentTarget;
      clickedGoal.querySelector(".update-modal").classList.toggle('hidden')

      clickedGoal.querySelector(".deleteBtn").addEventListener('click', deleteElement)
      clickedGoal.querySelector(".completed").addEventListener('click',completedHabit)

    });
  }


})();

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
};

fetch("https://habithon-server.herokuapp.com/goals/", options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data["success"]) {
      console.log(data.habits.length);
      if (data.habits.length == 0) {
        window.location.assign("/pages/index.html");
      }
    } else {
      throw "Unable to authenticate!";
    }
  })
  .catch((err) => alert(err)); // TODO in case of an error send back to login page.
