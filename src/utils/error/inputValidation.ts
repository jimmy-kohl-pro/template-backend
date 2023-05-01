import express from 'express';
import { ValidationChain, validationResult } from 'express-validator';
import AppError from './AppError';

/**
 * It takes an array of validations, runs them all, and if any of them fail, it throws an error
 * @param {ValidationChain[]} validations - ValidationChain[] - an array of validation chains
 * @returns A function that takes in a request, response, and next function.
 */
export const validate = (validations?: ValidationChain[]) => {
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (!validations) {
            return next();
        }
        await Promise.all(validations.map(validation => validation.run(req)));
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        throw new AppError('Invalid value', 400);
    };
};
