import { NextFunction, Request, Response } from "express"

class HttpError {
    public status: number
    public name: string
    public message: string
    constructor(mesaage: string) {
        this.message = mesaage
    }
}

export class NotFound extends HttpError {
    public status: number = 404
    public name: string = "Not Found"
    public message: string
    constructor(mesaage: string) {
        super(mesaage)
    }
}

export class BadRequest extends HttpError {
    public status: number = 400
    public name: string = "Bad Request"
    public message: string
    constructor(mesaage: string) {
        super(mesaage)
    }

}

export const httpErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpError) {
        const status = err.status || 400
        const message = err.message || "Ooooppppsi....."
        res.status(status).json({ message: message })
    } else {
        next(err)
    }
}