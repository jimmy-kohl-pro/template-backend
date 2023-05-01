import { body } from "express-validator";
import type { Controller, ControllerComponent } from "@src/@types/controller";
import { createExample } from "@src/services/ExampleService";

const ExampleController: Controller = [
    <ControllerComponent> {
        path: '/example/hello-world',
        method: 'post',
        validation: [
            body('name').isString(),
        ],
        fn: async (req, res) => {
            const name = req.body.query as string;
            const newExample = createExample(name);

            res.status(200).send({
                status: 200,
                data: {
                    newExample
                }
            });
        }
    }
];

export default ExampleController;
