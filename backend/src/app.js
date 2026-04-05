const express = require("express") //Import the Express library to create a web application server 
const cookieParser = require("cookie-parser") // Import the cookie-parser middleware to handle cookies in incoming requests
const cors = require("cors") // Import the CORS middleware to enable Cross-Origin Resource Sharing


const app = express(); // Create an instance of the Express application 

app.use(express.json()); // Middleware to parse JSON bodies in incoming requests
app.use(cookieParser()); // Middleware to parse cookies in incoming requests
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from this origin (frontend)
    credentials: true // Allow cookies to be sent in cross-origin requests
}))

const authRouter = require("./routes/auth.routes") // Import the authentication routes from the specified file
// required all the routes here and use them in the app
app.use("/api/auth", authRouter) // Use the authentication routes for any requests that start with "/auth"


module.exports = app // Export the Express application instance for use in other files (e.g., server.js)
