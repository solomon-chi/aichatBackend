# AI Chat API

This is a simple Node.js Express API that provides a chat interface powered by an AI backend. It utilizes MongoDB Atlas for data storage and environment variables for configuration.

## Prerequisites

Before running the application, ensure you have the following installed:

* Node.js (>= 14)
* npm (or yarn)
* MongoDB Atlas account

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/solomon-chi/aichatBackend.git
    cd aichatBackend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3.  **Configure environment variables:**

    * Create a `.env` file in the root directory of the project.
    * Add the following variables:

        ```
        PORT=5000 # or your desired port
        MONGODB_URI=<your_mongodb_atlas_connection_string>
        OPENAIAPIKEY
        ```

    * Replace `<your_mongodb_atlas_connection_string>` with your actual MongoDB Atlas connection string.

## Running the Application

1.  **Start the server:**

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

2.  The server will start running on the specified port (default: 5000). You should see the following message in the console:

    ```
    Server is running on port <PORT>
    ```

## API Endpoints

* **`/chat`**:
    * This route handles chat interactions.
    * It is defined in `./route/AIchatRoute.js`.
    * It uses the following HTTP methods:
        * `POST`: Used to send a message to the AI and receive a response. The request body should contain the message to be sent.


## Dependencies

* `express`: Web framework for Node.js.
* `cors`: Middleware for enabling Cross-Origin Resource Sharing.
* `dotenv`: Loads environment variables from a `.env` file.
* `body-parser`: Middleware for parsing request bodies.
* `mongodb`: MongoDB driver for Node.js.

## MongoDB Configuration

* The MongoDB connection is configured in `config/dbCofig.js`.
* The connection string is read from the `MONGODB_URI` environment variable.
* Ensure that your MongoDB Atlas cluster is properly configured and accessible.

## AI Backend Integration

* The AI backend logic is implemented in `route/AIchatRoute.js`.
* This readme does not cover details of the AI backend implementation.
* Ensure that the AI backend is properly integrated and configured to handle chat requests.

## Contributing

Feel free to contribute to this project by submitting pull requests or opening issues.
