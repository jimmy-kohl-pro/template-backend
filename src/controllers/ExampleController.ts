import { body } from "express-validator";
import type { Controller, ControllerComponent } from "@src/@types/controller";
import { createExample } from "@src/services/ExampleService";
import sanitizeModel from "@src/utils/helpers/sanitizeModel";

const ExampleController: Controller = [
    <ControllerComponent> {
        path: '/example/hello-world',
        method: 'post',
        validation: [
            body('name').isString(),
        ],
        callback: async (req, res) => {
            console.log(req.body);
            const name = req.body.query as string;
            const newExample = createExample(name);

            res.status(200).send({
                status: 200,
                data: {
                    example: sanitizeModel(newExample),
                }
            });
        }
    }
];

export default ExampleController;
