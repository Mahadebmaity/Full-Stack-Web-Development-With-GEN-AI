const express = require('express');
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const authRouter = express.Router();

// this is a js docs url = https://www.google.com/search?q=js+doc+comments&sca_esv=c1ee8e6b5b631181&sxsrf=ANbL-n6U6AOVddaOwTYuyNdkDFUz7D8y7Q%3A1774767017744&ei=qcvIaf2ELeqNseMPt9-cuAU&biw=1536&bih=695&ved=0ahUKEwi9_ZqtwsSTAxXqRmwGHbcvB1cQ4dUDCBM&uact=5&oq=js+doc+comments&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2pzIGRvYyBjb21tZW50czIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYCzIGEAAYFhgeMgYQABgWGB4yCBAAGBYYHhgKMggQABgWGB4YCjIGEAAYFhgeMgsQABiABBiKBRiGAzIFEAAY7wVI8TtQmgpYsjlwAngBkAEAmAGVAqAB7RaqAQYwLjEwLjW4AQPIAQD4AQGYAhGgAs8XqAIUwgIKEAAYRxjWBBiwA8ICBxAjGOoCGCfCAhcQABiABBiKBRiRAhjnBhjqAhi0AtgBAcICEBAAGAMYjwEY6gIYtALYAQHCAgQQIxgnwgIKEAAYgAQYigUYQ8ICCxAAGIAEGIoFGJECwgILEAAYgAQYsQMYgwHCAg4QABiABBiKBRiRAhixA8ICDRAAGIAEGIoFGEMYsQPCAggQABiABBixA8ICDRAAGIAEGBQYhwIYsQPCAgUQABiABMICChAAGIAEGBQYhwLCAgcQABiABBgKmAML8QVy5jK4FBk8o4gGAZAGCLoGBggBEAEYAZIHBTIuOS42oAfuabIHBTAuOS42uAe9F8IHBjItMTYuMcgHSIAIAQ&sclient=gws-wiz-serp
/**
 * @route POST /api/auth/register - Register a new user
 * @description This route allows a new user to create an account by providing necessary details such as username, email, and password. The server will validate the input and create a new user record in the database if the registration is successful.
 * @access Public
 */
authRouter.post("/register", authController.registerUserController)

/**
 * @route POST /api/auth/login - Login a user
 * @description This route allows an existing user to log in by providing their email and password. The server will validate the credentials and, if they are correct, will generate a JSON Web Token (JWT) for the user to authenticate future requests.
 * @access Public
 */
authRouter.post("/login", authController.loginUserController)

/**
 * @route GET/api/auth/logout - Logout a user
 * @description clear token from user cookie and add to blacklist`
 * @access public 
 */

authRouter.get("/logout", authController.logoutUserController)

/**
 * @route GET/api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController)


module.exports = authRouter;