import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import controllers from './controllers';
import { validate } from './utils/error/inputValidation';

const routes: Router = Router();

controllers.forEach(controller => {
    controller.forEach(route => {
        routes[route.method](route.path, asyncHandler(validate(route.validation)), ...(route.middlewares ?? []), asyncHandler(route.callback));
    });
});

export default routes;
