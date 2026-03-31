// server.js file is responsible for starting the Express server run and listening for incoming requests. It imports the Express application instance from app.js and sets up the server to listen on a specified port.
const app = require("./src/app") // Import the Express application instance from app.js
require("dotenv").config() // Load environment variables from a .env file into process.env
const connectToDB = require("./src/config/database") // Import the function to connect to the MongoDB database


connectToDB() // Call the function to establish a connection to the MongoDB database

app.listen(3000, () => { // Start the server and listen on port 3000
    console.log("Server is running on port http://localhost:3000") // Log a message to the console when the server starts successfully
})
    