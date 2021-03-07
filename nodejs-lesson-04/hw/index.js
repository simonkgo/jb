const { request, response } = require("express");
// const bp = require('body-parser')
// app.use(bp.json())
// app.use(bp.urlencoded({ extended: true }))
const express = require('express')
const app = express()
app.use(express.json())

const users = [
    { id: 1, firstname: 'Frogy', lastname: ' the frog', department: 'swamp area' },
    { id: 2, firstname: 'Fishy', lastname: 'the fish', department: 'aquarium area' },
]

app.get("/api/users", (request, response) => {
    response.json(users)
})
app.get("/api/users/:userId", (request, response) => {
    const userId = +request.params.userId
    const user = users.find(u => u.id === userId)

    response.json(user)
})

app.post("/api/users", (request, response) => {
    const newUser = request.body;
    users.push(newUser);
    response.json(users);
});

app.put("/api/users/:userId", (request, response) => {
    const id = +request.params.userId
    const user = request.body
    const index = users.findIndex(u => u.id === id)
    users[index] = user
    response.json(user)
})


app.delete("/api/users/:userId", (request, response) => {
    const id = +request.params.userId
    const index = users.findIndex(u => u.id === id)
    users.splice(index, 1)
    console.log(users);
    response.json(users);

})


app.patch("/api/users/:userId", (request, response) => {
    const id = +request.params.userId;
    const user = request.body;
    const index = users.findIndex(u => u.id === id)
    if (user.firstname) {
        users[index].name = user.firstname
    }
    if (user.lastname) {
        users[index].lastname = user.lastname
    }
    if (user.department) {
        users[index].department = user.department
    }



    response.json(users)
})

app.listen("3000", () => console.log("Server listening on port 3000"));














