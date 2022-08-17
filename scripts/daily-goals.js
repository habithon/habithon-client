import { checkUser } from "./utils.js";
checkUser();

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