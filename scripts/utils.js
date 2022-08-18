function checkUser () {

    const token = localStorage.getItem('token');
    console.log(token)
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

function logout () {

    document.querySelector('.logout')
    .addEventListener('click', () => {
        console.log("hi")
        localStorage.removeItem('token')
        window.location.assign("/pages/login.html")
    })
}

async function getGoals () {

    const options = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
    }
    try {
        const response = await fetch("https://habithon-server.herokuapp.com/goals/", options)
        const data = await response.json()

        if (data.success) {
        return data.habits
        } else {
            throw "Something went wrong"
        }

    } catch (err) {
        alert(err)
    }
    
}

export { checkUser, checkInvalidUser, logout, getGoals };
