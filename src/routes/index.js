import express from 'express';
import CharactersController from '../controllers/CharactersController';

const routes = express.Router();

routes.get('/api', CharactersController.get);

export default routes;