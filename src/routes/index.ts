import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import controllers from '@src/controllers';
import { validate } from '@src/utils/error/inputValidation';

const routes: Router = Router();

controllers.forEach(controller => {
    controller.forEach(route => {
        routes[route.method](route.path, asyncHandler(validate(route.validation)), asyncHandler(route.fn));
    });
});

export default routes;
