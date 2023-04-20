# My Chat App

My Chat App is a simple chat application built with Node.js, React, and Socket.io. Users can log in, join chat rooms, and chat with other users in real time.

## Getting Started

To get started with My Chat App, first clone this repository:

### Prerequisites

To run My Chat App, you will need:

- Docker
- Docker Compose

### Running the App

To start the app, run the following command from the root directory:

This will start the backend and frontend containers and create a network for them to communicate on. Once the containers are up and running, you can access the app at `http://localhost:3000`.

## Overview

### Backend

The backend of My Chat App is built with Node.js and uses the following libraries:

- Express: A lightweight web framework for Node.js
- Socket.io: A library for real-time, bidirectional communication between client and server
- Mongoose: An object modeling tool for MongoDB
- Passport: A library for authentication in Node.js

The backend is divided into several parts:

- **API:** Contains the routes for the app's API. The API includes endpoints for authentication and chat room management.
- **Controllers:** Contains the logic for handling requests to the API.
- **Models:** Defines the schema for the app's data.
- **Services:** Contains the logic for interacting with external services, such as authentication providers.

### Frontend

The frontend of My Chat App is built with React and uses the following libraries:

- Socket.io-client: The client-side library for Socket.io.

The frontend is divided into several parts:

- **Components:** Contains the reusable UI components used throughout the app.
- **App:** The root component of the app.
- **Index:** The entry point for the app.

### Database

The app uses a MongoDB database to store user information and chat messages. The database is managed using Docker Compose and the `docker-compose.yml` file.

## Contributing

If you would like to contribute to My Chat App, please open a pull request on GitHub.

## License

My Chat App is released under the MIT License.
