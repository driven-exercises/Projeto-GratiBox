import express from 'express';
import cors from 'cors';

import { signUp } from './controllers/signUp.js';

const app = express();
app.use(cors());
app.use(express.json());

// ------ SIGN-UP ------
app.post('/sign-up', signUp);

export {
    app,
};
