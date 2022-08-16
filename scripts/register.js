function register (data) {
    console.log("register", data)
}

document.querySelector('.register-form').addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    register({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
        passwordCheck: form.get("passwordCheck")
    })

    e.target.reset();
})
