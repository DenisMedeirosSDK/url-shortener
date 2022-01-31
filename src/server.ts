import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { getConnection } from './utils/connectDatabase';
import { routes } from './routes';
import { limiter } from './middlewares/rateLimiter';

getConnection();

const PORT = process.env.PORT as string;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(limiter);

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });
  }
);

app.listen(PORT, () => console.log(`Server running in ${PORT}`));
