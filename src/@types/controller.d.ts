import { Request, Response } from 'express';
import { ValidationChain } from 'express-validator';


/**
 * @interface ControllerComponent Component of a controller
 * 
 * @property {string} path Path of the route
 * @property {ValidationChain[]} validation - An array of validation chains that will be call by validator handler
 * @property {(req: Request, res: Response, next: Function) => Promise<void>} fn - A function that is called when the route is called
 */
export interface ControllerComponent {
    /* Path of the route */
    path: string;

    /* The HTTP method that will be used to call the route. */
    method: 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';

    /**
     * A list of validation chains that will be called by the validator handler.
     */
    validation: List<ValidationChain>;

    /**
     * A function that is called when the route is called 
     */
    fn: (req: Request, res: Response) => Promise<T> | T;
}

export type Controller = ControllerComponent[];
