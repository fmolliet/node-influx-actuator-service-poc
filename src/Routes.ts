import { Router } from 'express';

import Controller from './Controller';

const controller = new Controller();

const routes = Router();

routes.post('/verify', controller.verify);

export default routes;