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
  fetch("https://habithon-server.herokuapp.com/goals/" + id, options);
};

const completedHabit = (e) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };
  const id = e.target.dataset.habit;
  fetch("https://habithon-server.herokuapp.com/goals/" + id, options);
};

(async () => {
  const habits = await getGoals();
  console.log(habits);
  const grid = document.querySelector(".goals-grid");

  habits.forEach((habit) => {
    const div = document.createElement("div");
    div.classList.add("goals-item");
    div.innerHTML = ` 
        <div class="goals-image"> <img src="images/daily-goals-${habit.habit.toLowerCase()}.jpg" alt=""></div>
        <div class="goals-item-extra"></div>
        <div class='stats-wrapper'> <h2>${habit.habit}</h2>
            <p><strong>Frequency: </strong>  <span>${habit.frequency}</span></p>
            <p><strong>Current streak: </strong>  <span>${habit.streak}</span></p>
        </div>
        <div class='update-modal' id="read-modal">
        <button class="update-btn completed" data-habit="${habit.id}">Completed</button>
        <button class="update-btn deleteBtn" data-habit="${habit.id}">Delete</button>
        <button class="update-btn cancel">Cancel</button>
        </div>
        `;
    grid.appendChild(div);
  });
  document.querySelector(".goals-item").addEventListener("click", (a) => {
    a.target;
    document.querySelector(".update-modal").style.display = "flex";
  });
  document.querySelector(".deleteBtn").addEventListener("click", deleteElement);
  document
    .querySelector(".completed")
    .addEventListener("click", completedHabit);
  document.querySelector(".cancel").addEventListener("click", (a) => {
    a.target;
    document.querySelector(".update-modal").style.display = "hidden";
  });
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
