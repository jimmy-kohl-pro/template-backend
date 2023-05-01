import type { Controller } from '@src/@types/controller';
import fs from 'fs';
import path from 'path';

const controllers: Controller[] = [];

// Get a list of all files in the controllers directory
const controllerFiles = fs.readdirSync(__dirname)
    .filter((file) => file !== 'index.ts' && file.endsWith('.ts'));

// Import all controller files and add their default exports to the controllers array
for (const file of controllerFiles) {
    const controller = require(path.join(__dirname, file)).default;
    controllers.push(controller);
}

export default controllers;
