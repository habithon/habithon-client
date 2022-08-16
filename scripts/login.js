function login (data) {
    
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch("http://localhost:3000/users/login", options)
        .then(res => res.json())
        .then(data => {
            if (data["success"]) {
                localStorage.setItem("token", data["token"]);
                window.location.assign("/");
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
        email: form.get("email"),
        password: form.get("password")
    })

    e.target.reset();
})
