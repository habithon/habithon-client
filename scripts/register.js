import { checkInvalidUser } from "./utils.js"
checkInvalidUser();

function register (data) {
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch("https://habithon-server.herokuapp.com/user/register", options)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            if (response["success"]) {
                window.location.assign("/pages/login.html");
              
            } else {
                throw "Unable to authenticate!"
            }
        })
        .catch(err => alert(err))
    
}

document.querySelector('.register-form').addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    register({
        username: form.get("username"),
        email: form.get("email"),
        password: form.get("password"),
        passwordCheck: form.get("passwordCheck")
    })

    e.target.reset();
    
})
