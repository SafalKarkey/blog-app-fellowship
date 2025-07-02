import { errorLogger } from "./logger";
import { NextFunction, Request, Response } from "express";

export const errorLogMiddle = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const logInformation = {
    ip: req.ip || req.connection.remoteAddress,
    date: new Date().toISOString(),
    method: req.method,
    path: req.originalUrl,
    userAgent: req.headers["user-agent"],
    status: res.statusCode !== 200 ? res.statusCode : 500,
  };

  errorLogger.error(err.message, logInformation);

  next(err); // Pass to actual error responder
};