import { body } from "express-validator";
import type { Controller, ControllerComponent } from "@src/@types/controller";
import { getExample } from "@src/services/ExampleService";

const ExampleController: Controller = [
    <ControllerComponent> {
        path: '/example/hello-world',
        method: 'post',
        validation: [
            body('query').isString(),
        ],
        fn: async (req, res) => {
            const query = req.body.query;
            const message = getExample(query);

            res.status(200).send({
                status: 200,
                data: {
                    message
                }
            });
        }
    }
];

export default ExampleController;
