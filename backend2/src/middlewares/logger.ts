import winston from "winston";

export const infoLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'info.log' }),
  ],
});


if (process.env.NODE_ENV !== 'production') {
  infoLogger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

export const errorLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log' }),
  ],
});


if (process.env.NODE_ENV !== 'production') {
  errorLogger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}
