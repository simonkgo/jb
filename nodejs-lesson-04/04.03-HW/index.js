const employees = [
    { "id": 10, "firstName": "nini", "lastName": "banini", "department":"marketing"},
    { "id": 20, "firstName": "nunu", "lastName": "banunu", "department":"engineering"},
    { "id": 30, "firstName": "nana", "lastName": "banana", "department":"programming"},
];
//{ "id": 40, "firstName": "nene", "lastName": "benene", "department":"filing"}
let express = require("express");

let myApp = express();

myApp.use(express.json());

myApp.get("/api/v1/users", (request, response)=>{
    response.json(employees);
})

myApp.get("/api/v1/users/:theId", (request, response)=>{
    let theId = +request.params.theId;
    let user = employees.find(oneUser=> oneUser.id===theId);
    response.json(user);
});

myApp.post("/api/v1/users", (request, response)=>{
    let user = request.body;
    employees.push(user);
    response.json(employees);
});

myApp.put("/api/v1/users/:theId", (request, response)=>{
    let user = request.body;
    let theId = +request.params.theId;
    let index = employees.findIndex(oneUser=> oneUser.id===theId);
    employees[index] = user;
    response.json(employees);
});

myApp.patch("/api/v1/users/:theId", (request, response)=>{
    let user = request.body;
    let theId = +request.params.theId;
    let index = employees.findIndex(oneUser=> oneUser.id===theId);
    for(const thisKey in user){
        for(const thatKey in employees[index]){
            if(thisKey===thatKey){
                employees[index][thatKey]= user[thisKey];
            }
        }
    }
    response.json(employees);
});

myApp.delete("/api/v1/users/:theId", (request, response)=>{
    let theId = +request.params.theId;
    let index = employees.findIndex(oneUser=> oneUser.id===theId);
    employees.splice(index,1);
    response.json(employees);
});

myApp.listen(4000, ()=>{
    console.log("server running at http://127.0.0.1:4000/")
});