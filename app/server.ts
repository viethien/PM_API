/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from 'express';

// Import WelcomeController from controllers entry point
import { HomeController } from './controllers';

// Create a new express application instance
const app: express.Application = express();


// Mount the WelcomeController at the /welcome route
app.use('/', HomeController);

// Serve the application at the given port
app.listen(3000, () => {
    // Success callback
    console.log(`Listening at http://localhost:3000/`);
});