import { NextFunction, Request, Response } from "express";

class HttpError {
    public status = 400;
    public message: string;
    constructor(message: string) {
        this.message = message;
    };
};

export class NotFound extends HttpError {
    public status = 404;
    public name = "Not Found";
    constructor(message: string) {
        super(message)
    };
};

export class Forbiden extends HttpError {
    public status = 403;
    public name = "Forbiden";
    constructor(message: string) {
        super(message)
    };
}

export const httpErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpError) {
        const status = err.status || 400;
        const message = err.message || "Oooopsi...";
        res.status(status).json({ message: message });
    } else {
        next(err); //will go to next error middleware;
    };
};

export const programmerErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.json("some problem")
    process.exit(1);
};