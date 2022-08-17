import { checkInvalidUser } from "./utils.js"
checkInvalidUser();

function login (data) {
    
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch("https://habithon-server.herokuapp.com/user/login", options)
        .then(res => res.json())
        .then(data => {
            if (data["success"]) {
                localStorage.setItem("token", data["token"]);
                window.location.assign("/pages/index.html");
            } else {
                throw "Unable to authenticate!"
            }
          
        })
        .catch(err => alert(err))

}

document.querySelector('.login-form').addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    login({
        username: form.get("username"),
        password: form.get("password")
    })

    e.target.reset();
})
