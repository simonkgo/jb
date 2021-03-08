import * as express from 'express'


class User {
    constructor(public id: string, public firstName: string, public lastName: string, public department: string) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.department = department
    }
}
const mikel = new User("1", "Mikel", "Bugayets", "Inspector")
const anna = new User("2", "Anna", "Bugayets", "Call Center")
const thomas = new User("3", "Thomas", "Bugayets", "Destroying our House")

const users = [mikel, anna, thomas]


export class Server {
    public app: express.Application
    constructor() {
        this.activate()

    }

    activate() {
        this.app = express()
        this.app.use(express.json())
        this.app.listen("3000", () => { console.log("Server on and Listening on port 3000") })

        this.app.get("/api/v1/users", (request, response) => {
            response.json(users)
        })
        this.app.get("/api/v1/users/:id", (request, response) => {
            const id = request.params.id
            const currentUser = users.findIndex(user => user.id === id)
            response.json(users[currentUser])
        })
        this.app.post("/api/v1/users", (request, response) => {
            const newUser = request.body
            users.push(newUser)
            response.json(users)
        })
        this.app.put("/api/v1/users/:id", (request, response) => {
            const id = request.params.id
            const currentUser = users.findIndex(user => user.id === id)
            const correctedUser = request.body
            users[currentUser] = correctedUser
            response.json(users)
        })
        this.app.patch("/api/v1/users/:id", (request, response) => {
            const userBody = request.body
            const id = request.params.id
            const index = users.findIndex(user => user.id === id)
            const userFromArr = users[index]

            for (let key in userBody) {
                if (key in userFromArr) {
                    userFromArr[key] = userBody[key]
                }
            }
            response.json(userFromArr)
        })
        this.app.delete("/api/v1/users/:id", (request, response) => {
            const id = request.params.id
            const currentUser = users.findIndex(user => user.id === id)
            users.splice(currentUser, 1)
            response.json(users)
        })

    }


}

new Server()