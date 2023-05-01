import { body } from "express-validator";
import type { Controller, ControllerComponent } from "@src/@types/controller";
import { createExample, getExamples } from "@src/services/example.service";
import sanitizeModel from "@src/utils/helpers/sanitizeModel";

const ExampleController: Controller = [
    <ControllerComponent> {
        path: '/example/hello',
        method: 'post',
        validation: [
            body('name').isString(),
        ],
        callback: async (req, res) => {
            const name = req.body.name as string;
            const newExample = await createExample(name);

            res.status(200).send({
                status: 200,
                data: {
                    example: sanitizeModel(newExample),
                }
            });
        }
    },

    <ControllerComponent> {
        path: '/examples',
        method: 'get',
        callback: async (req, res) => {
            const examples = await getExamples();

            res.status(200).send({
                status: 200,
                data: {
                    examples: examples.map(example => sanitizeModel(example)),
                }
            });
        }
    }

];

export default ExampleController;
