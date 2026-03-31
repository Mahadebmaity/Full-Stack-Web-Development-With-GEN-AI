const mongoose = require("mongoose") // Import the Mongoose library to interact with MongoDB

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB successfully") // Log a success message if the connection is established
    } catch (error) {
        console.error("Error connecting to MongoDB:", error) // Log any errors that occur during the connection attempt
    }
}

module.exports = connectToDB // Export the connectToDB function for use in other files (e.g., server.js)
