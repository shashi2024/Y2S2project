## Project Backend

This project requires Node.js and Yarn to be installed on your machine. Please google yarn for installation instructions.

### Installation

To install the project dependencies, navigate to the project directory in your terminal and run the following command:

```bash
yarn install
```

### Running the Project

After installing the dependencies, you can start the project by running the following command in your terminal:

```bash
yarn start
```

## Project Structure

The main components of the project are located in the `src/` directory:

- `app.js`: This is the entry point of your application. It's where you set up your server, connect to your database, and include your routes.

- `controllers/`: This directory contains controller files. Controllers handle incoming HTTP requests and send responses. They act as a middleman between the model and the view.

- `routes/`: This directory contains route files. Routes define the endpoints of your API, and they connect HTTP requests to the appropriate controller functions.

- `model/`: This directory contains model files. Models represent the data in your application and define the structure of the database tables/collections.

- `middlewares/`: This directory contains middleware functions. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

- `services/`: This directory contains service files. Services are used to organize your business logic and keep your controllers clean.

- `validations/`: This directory contains validation files. These files are used to validate the data in your requests.

## Linting with ESLint

This project uses [ESLint](https://eslint.org/) to enforce a consistent code style and catch potential bugs. Two scripts are defined in the `package.json` file to help with this:

- `lint`: This script runs ESLint on all the JavaScript files in the project. To run it, use the following command:

```bash
yarn lint
```

This will output any linting errors or warnings in your terminal. It's a good idea to run this command before committing your code to ensure that it adheres to the project's style guide.

```bash
yarn lint:fix
```

This command can save you time by fixing common issues like incorrect indentation or missing semicolons. However, not all issues can be fixed automatically, so you should still review the output and fix any remaining issues manually.

Remember to replace yarn with npm run if you're using npm instead of Yarn.
