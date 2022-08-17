async function getAll(habits){
    try {
        const response = await fetch(`http://localhost:3000/${habits}`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function getHabit(habits, id) {
    try {
        const response = await fetch(`http://localhost:3000/${habits}/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function postHabit(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        const response = await fetch('http://localhost:3000/habits', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#habits/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}

async function deleteHabit(id){
    try {
        const options = { method: 'DELETE' }
        await fetch(`http://localhost:3000/habits/${id}`, options);
        window.location.hash = `#habits`
    } catch (err) {
        console.warn(err);
    }
}
