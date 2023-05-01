import { NextFunction, Request, Response } from 'express';
import AppError from '@src/utils/error/AppError';

export function notFoundMiddleware(req: Request, res: Response, next: NextFunction): void {
    res.status(404);
    throw new AppError('Route not found', 404);
}

export function customErrorMiddleware(err: AppError, req: Request, res: Response, next: NextFunction) {
    console.error(err);
    res.status(err.statusCode || 500).send({
        status: err.statusCode || 500,
        error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.toString(),
    });
}
