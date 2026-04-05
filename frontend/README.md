# Frontend
## Frontend Part of this project is built using ReactJS. The frontend code is located in the `frontend` directory.

### We need to use proper folder structure to keep our code organized. so there are four architectural layers in the frontend part of this project. They are:

#### UI Layer: This layer is responsible for the presentation of the application. It contains all the components and pages that are rendered to the user. The UI layer is further divided into two sub-layers:
1. **Components**: This layer contains reusable UI components that can be used across different pages. These components are usually small and focused on a specific functionality. For example, a button component, a form input component, etc.    
2. **Pages**: This layer contains the different pages of the application. Each page is a combination of components that together form a complete view. For example, a login page, a registration page, etc.

#### State Management Layer: This layer is responsible for managing the state of the application. It contains all the logic related to state management, such as actions, reducers, and store configuration. In this project, we are using Redux for state management.
1.auth.context.jsx: This file contains the context for authentication. It provides the necessary state and functions to manage user authentication across the application.
2.ai.context.jsx: This file contains the context for AI-related functionalities. It provides the necessary state and functions to manage AI interactions across the application.

#### API Layer: This layer is responsible for making API calls to the backend. It contains all the logic related to API interactions, such as making HTTP requests, handling responses, and managing errors. In this project, we are using Axios for making API calls.
1.auth.api.js: This file contains all the API calls related to authentication, such as login, registration, etc.
2.ai.api.js: This file contains all the API calls related to AI interactions, such as sending prompts, receiving responses, etc.
#### Utils Layer: This layer contains utility functions that can be used across the application. These functions are usually small and focused on a specific task. For example, a function to format dates, a function to validate input, etc.
1.auth.utils.js: This file contains utility functions related to authentication, such as validating user input, formatting error messages, etc.
2.ai.utils.js: This file contains utility functions related to AI interactions, such as formatting prompts
and responses, handling errors, etc.

#### Hooks layer: This layer contains custom hooks that can be used across the application. These hooks are usually small and focused on a specific functionality. For example, **a hook to manage form state, a hook to handle API calls, etc.**
1.useAuth.js: This file contains a custom hook for managing authentication state and actions. It provides functions for logging in, logging out, and checking authentication status.
2.useAI.js: This file contains a custom hook for managing AI interactions. It provides functions for sending prompts, receiving responses, and handling AI-related state.


