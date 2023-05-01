# Template Backend

This is a backend template built with TypeScript, Express.js, and Mongoose. The code structure follows the Model-Routes-Controllers-Services pattern. It is designed to be easily customizable and extendable.

## Getting Started

1. Clone this repository: `git clone https://github.com/jimmy-kohl-pro/template-backend.git`
2. Install dependencies: `npm install`
3. Add a `.env` file in the root directory with the following variables:

```
PORT=3000
DB_USER=<your-database-user>
DB_PASSWORD=<your-database-password>
DB_NAME=<your-database-name>
DB_HOST=<your-database-host>
```
3. Start the server: `npm run dev`
4. Make a POST request to `http://localhost:3000/example/hello-world` with the following body:

```json
{
  "name": "John Doe"
}
```


## Code Structure

The code is structured into the following directories:

- `src/controllers`: contains all controllers which handle the incoming HTTP requests.
- `src/models`: contains all Mongoose models.
- `src/routes.ts`: contains all the routes defined for the application.
- `src/services`: contains all services which handle the business logic.

