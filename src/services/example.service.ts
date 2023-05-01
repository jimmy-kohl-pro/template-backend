import Example, { IExample } from "@src/models/Example.model";

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
