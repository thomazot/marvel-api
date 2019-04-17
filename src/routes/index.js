import express from 'express';
import CharactersController from '../controllers/CharactersController';
import SingleController from '../controllers/SingleController';

const routes = express.Router();

routes.get('/result', CharactersController.get);
routes.get('/single', SingleController.get);

export default routes;