import { checkInvalidUser, register } from "./utils.js"
checkInvalidUser();


document.querySelector('.register-form').addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    try {
        const data = await register({
            username: form.get("username"),
            email: form.get("email"),
            password: form.get("password"),
            passwordCheck: form.get("passwordCheck")
        })

        if (response["success"]) {
            window.location.assign("/pages/login.html");            
            } else {
                    throw "Unable to authenticate!"
            }
    } catch (err) {
        alert(err)
    }
    
    e.target.reset();
    
})
