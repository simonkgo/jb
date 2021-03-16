import { NextFunction, Request, Response } from "express";

export class HttpError {
  public status = 500;
  public message = "There is a problem with our website";
  constructor(message) {
    this.message = message;
  }
}

export class BadRequest extends HttpError {
  public status = 400;
  public message = "There as a bed request";

  constructor(message) {
    super(message);
  }
}

export class NotFound extends HttpError {
  public status = 404;
  public message = "page not found";

  constructor(message) {
    super(message);
  }
}

export const httpMiddelwareError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpError) {
    const { status, message } = err;
    res.status(status).json(message);
  } else next(err);
};
