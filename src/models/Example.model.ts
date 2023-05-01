import { Schema, model, Model, Document, Types } from 'mongoose';

export interface IExample extends Document {
    message: string;
}

const ExampleSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
});

export const Example: Model<IExample> = model('Example', ExampleSchema) as unknown as Model<IExample>;

export default Example;
