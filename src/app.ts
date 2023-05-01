import express from 'express';
import cors from 'cors';
import { customErrorMiddleware, notFoundMiddleware } from './middleware/error.middleware';
import routes from './routes';

const app = express();

// *** Middleware *** //
app.use(express.json());
app.use(cors());

// *** Routes *** //
app.use('/', routes);

// *** End Middleware *** //
app.use(notFoundMiddleware);
app.use(customErrorMiddleware);

export default app;
