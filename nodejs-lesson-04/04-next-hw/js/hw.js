const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const users = [
    { id: 1, firstName: "Inbal", lastName: "Goldblatt", department: "Copmuters" },
    { id: 2, name: "Dor", lastName: "Alon", department: "Education" },
];

app.get("/api/v1/users", (request, response) => {
   response.json(user);
});

app.get("/api/v1/users/:id", (request, response) => {
   const findUser = user.find(user => user.id === parseInt(req.params.id));
   response.json(findUser);
});

app.post("/api/v1/users", (request, response) => {
   const newUser = req.body;
   user.push(newUser);
   response.json(newUser);
});

app.put("/api/v1/users/:id", (request, response) => {
const id = +request.params.id;
    const user = request.body;
    const index = users.findIndex(b => u.id === id);
    if (index === undefined) {
        response.json("This user does not exist");
    }

    user.id = id;
    users[index] = user;
    response.json(users[index]);
});

app.patch("/api/v1/users/:id", (request, response) => {
   const data = request.body;
   users.forEach (user => {
      if (user.id === parseInt(req.params.id)) {
         user.id = data.id ? data.id : user.id;
         user.firstName = data.firstName ? data.firstName : user.firstName;
         user.lastName = data.lastName ? data.lastName : user.lastName;
         user.department = data.department ? data.department : user.department;

         response.json("The user is update")
      };
   });
});

app.delete("/api/v1/users/:id", (request, response) => {
   const deleteUser = users.findIndex(user => user.id === parseInt(req.params.id));
   users.splice(deleteUser, 1);
   response.json("The User has been deleted")
});


app.listen(port, console.log(`The server is runing at port ${port}`));