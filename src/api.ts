import { Router } from 'express';
import DatabaseController from './controller/controller';

const DatabaseRouter = Router();

DatabaseRouter.get('/:input', DatabaseController.getItem);

DatabaseRouter.post('/', DatabaseController.setItem);

export default DatabaseRouter;