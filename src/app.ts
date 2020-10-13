import express from 'express';
import './db/connection';
import DatabaseRouter from './api';

const { PORT } = process.env;

const Experss = express();

Experss.use(express.json());

Experss.use(DatabaseRouter);

Experss.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});