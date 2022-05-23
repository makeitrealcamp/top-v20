# NODE-SERVER Example 💻

Hello and welcome! This Node.JS project demonstrates a simple architecture building a full API with Node.JS, Express.JS, and MongoDB presents an architectural demo of these features:

- Built with Node.js and Express
- REST API

## Express Router and Routes

| Route               | HTTP Verb | Route Middleware   | Description                          |
| --------------------| --------- | ------------------ | ------------------------------------ |
| /api/task           | GET       |                    | Get list of task                     |
| /api/task           | POST      |                    | Creates a new task                   |
| /api/task/:id       | GET       |                    | Get a single task                    |
| /api/task/:id       | DELETE    |                    | Deletes a task                       |


## Usage
The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a user or log in, here we have some examples.

### Basic example **Create TASK** `/api/taks`:

Request Body:
```json
{
  "title": "Create task",
  "description": "Endpoint para crear tareas"
}
```

Response:
```json
{
  "title": "Create task",
  "description": "Endpoint para crear tareas",
  "completed": false,
  "id": 4
}
```

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 16.14.x, npm >= 8.3.x

### Developing

1. Run `npm install` to install server dependencies.

2. Configure the env
```shell
$ cp .env.example .env
```

3. Update `.env` with the required info

4. Run `npm run dev` to start the development server.
