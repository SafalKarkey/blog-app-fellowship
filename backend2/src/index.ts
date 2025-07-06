import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';


import appRouter from './routes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';
import { errorLogMiddle } from './middlewares/errorLogging';
// import { errorLogger } from './middlewares/logger';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use(appRouter);

app.use(notFound);
app.use(errorLogMiddle);
app.use(errorHandler);
// errorLogger.error('Test error')

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));


