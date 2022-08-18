import { checkInvalidUser, login } from "./utils.js"
checkInvalidUser();


document.querySelector('.login-form').addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    try {
        
        const data = await login({
            username: form.get("username"),
            password: form.get("password")
        })

        if (data["success"]) {
            localStorage.setItem("token", data["token"]);
            window.location.assign("/pages/daily-goals.html");
        } else {
            throw "Unable to authenticate!"
        }
    } catch (err) {
        alert(err)
    }
   

    e.target.reset();
})
