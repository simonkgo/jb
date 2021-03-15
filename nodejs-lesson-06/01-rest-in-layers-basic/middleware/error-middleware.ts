/* -------------------------------------------------------------------------- */
/*                              Error Middleware                              */
/* -------------------------------------------------------------------------- */

import { NextFunction, Request, Response } from "express"

class HttpError {
    public status = 400
    public message: string
    constructor(mesaage: string) {
        this.message = mesaage
    }
}

export class NotFound extends HttpError {
    public status = 404
    public name: string = "Not Found"
    constructor(message: string) {
        super(message)
    }
}
export class Forbidden extends HttpError {
    public status = 403
    public name: string = "Forbidden"
    constructor(message: string) {
        super(message)
    }
}
export class BadRequest extends HttpError {
    public status = 400
    public name: string = "Bad Request"
    constructor(message: string) {
        super(message)
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