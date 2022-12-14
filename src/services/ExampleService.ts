import Example from "@src/models/ExampleModel";

export function getExample(query: string) {
    const example = Example.getExample(query);
    return example.string;
}
