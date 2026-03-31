const mongoose = require("mongoose") // Import the Mongoose library to interact with MongoDB

const userSchema = new mongoose.Schema({ // Define a Mongoose schema for the User model
    username: { // Define a username field
        type: String, // The type of the username field is String
        required: true, // The username field is required
        unique: [true, "Username must be unique"], // The username field must be unique across all documents in the collection
    },
    email: { // Define an email field
        type: String, // The type of the email field is String
        required: true, // The email field is required
        unique: [true, "Email must be unique"], // The email field must be unique across all documents in the collection
    },
    password: { // Define a password field
        type: String, // The type of the password field is String
        required: true // The password field is required
    } // Enable automatic creation of createdAt and updatedAt fields

})

const usermodel = mongoose.model("User", userSchema) // Create a Mongoose model named "User" using the defined userSchema   
module.exports = usermodel // Export the usermodel for use in other files (e.g., controllers, routes)