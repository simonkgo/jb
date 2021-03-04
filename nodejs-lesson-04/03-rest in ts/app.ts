import * as express from 'express'


export class Server {
    public app: express.Application
    constructor() {
        this.activate()
    }

    activate() {
        this.app = express()
        this.app.use(express.json())
        this.app.listen("3000", () => { console.log("Server listening on port 3000") })
    }
}


new Server()