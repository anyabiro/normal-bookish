import express from 'express';
import 'dotenv/config';

import healthcheckRoutes from './controllers/healthcheckController';
import bookRoutes from './controllers/bookController';
import cors from 'cors';

const port = process.env['PORT'] || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
app.use(cors());

/**
 * Primary app routes.
 */
app.use('/healthcheck', healthcheckRoutes);
app.use('/books', bookRoutes);
