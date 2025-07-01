import { infoLogger } from "./logger";
import { NextFunction, Request, Response } from "express";

export const infoLogMiddle = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    const logInformation = {
        ip: req.ip || req.connection.remoteAddress,
        date: new Date().toISOString(),
        method: req.method,
        path: req.originalUrl,
        userAgent: req.headers['user-agent'],
        status: res.statusCode,
        responseTime: `${Date.now() - start}ms`
    }

    infoLogger.info(logInformation);
    next();
}