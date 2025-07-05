import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';

import appRouter from './routes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';
// import { logger } from './middlewares/logmiddle';

// Clerk imports
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';

//logger imports
import { infoLogMiddle } from './middlewares/loggingMiddleware';
import { errorLogMiddle } from './middlewares/errorLogging';

dotenv.config();

const app: Application = express();

app.use(infoLogMiddle);
app.use(express.json());
app.use(cors());

// Clerk middleware: attaches req.auth to all requests
app.use(ClerkExpressWithAuth());


app.use(appRouter);

app.use(notFound);

app.use(errorHandler);
app.use(errorLogMiddle);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is now running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
