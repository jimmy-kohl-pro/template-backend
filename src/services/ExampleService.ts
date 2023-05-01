import Example, { IExample } from "@src/models/ExampleModel";

export async function createExample(query: string): Promise<IExample> {
    const example = new Example({
        message: `Hello, ${query}!`
    });
    
    await example.save();

    return example;
}

export function getExamples(): Promise<IExample[]> {
    return Example.find().exec();
}
