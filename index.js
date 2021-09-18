// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
    .then(res => res.json())
    .then(data => renderUser(data))
    .catch(function (error){
        console.log(error)
        alert("Unauthorized Access")
        document.body.append(error.message)
    })
}

function renderUser(data){
    console.log(data.id)
    document.body.append(data.id)
}

