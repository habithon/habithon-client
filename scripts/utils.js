function checkUser () {
    const token = localStorage.getItem('token');

if (!token) {
    window.location.assign("/pages/login.html")
}
}

function checkInvalidUser () {
    const token = localStorage.getItem('token');

if (token) {
    window.location.assign("/pages/index.html")
}
}

export { checkUser, checkInvalidUser };
