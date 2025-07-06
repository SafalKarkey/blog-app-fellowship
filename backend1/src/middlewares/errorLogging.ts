import { errorLogger } from "./logger";
import { Request, Response } from "express";

export const errorLogMiddle = (req: Request, res: Response) => {
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

    errorLogger.error("404 Not Found",logInformation);

    res.status(404).json({
    "message": "resource not found"
  });
}