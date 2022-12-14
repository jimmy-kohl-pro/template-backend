export default class Example {
    string: string;

    constructor(query: string) {
        this.string = 'Hello World! ' + query;
    }

    static getExample(query: string) {
        const example = new Example(query);
        return example
    }
}
