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

function logout () {

    document.querySelector('.logout')
    .addEventListener('click', () => {
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

async function login (data) {
    
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetch("https://habithon-server.herokuapp.com/user/login", options)
    const resData = await response.json()
    return resData
}

async function register (data) {
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetch("https://habithon-server.herokuapp.com/user/register", options)
    const resData = await response.json()
    return resData
        
}


module.exports =  { checkUser, checkInvalidUser, logout, getGoals, login, register };
