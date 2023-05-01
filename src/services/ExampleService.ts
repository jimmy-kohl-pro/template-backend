import Example, { IExample } from "@src/models/ExampleModel";

export function createExample(query: string): IExample {
    const example = new Example({
        message: `Hello, ${query}!`
    });

    return example;
}
