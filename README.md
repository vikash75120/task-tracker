# Task Tracker CLI

A simple command-line Task Tracker built with **Node.js** using the **CommonJS** module system. This project demonstrates CRUD operations, file-based persistence using JSON, and a modular backend architecture without any external libraries. Project url: [https://roadmap.sh/projects/task-tracker](https://roadmap.sh/projects/task-tracker).

---

## Features

* ✅ Add a new task
* ✅ Update an existing task
* ✅ Delete a task
* ✅ List all tasks
* ✅ List tasks by status
* ✅ Mark a task as:

  * `todo`
  * `in-progress`
  * `done`
* ✅ Persistent storage using a JSON file
* ✅ Modular command-based architecture

---

## Project Structure

```text
backend/
│
├── commands/
│   ├── add.js
│   ├── delete.js
│   ├── help.js
│   ├── list.js
│   ├── markDone.js
│   ├── markInProgress.js
│   ├── markTodo.js
│   └── update.js
│
├── services/
│   └── taskService.js
│
├── utils/
│   └── allCommands.json
│
├── db/
│   └── tasks.json
│
├── server.js
├── package.json
└── README.md
```

---

## Prerequisites

* Node.js (v18 or later recommended)
* npm

Verify your installation:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Move into the project

```bash
cd task-tracker/backend
```

### 3. Install dependencies

```bash
npm install
```

> This project uses only Node.js built-in modules, so no external packages are installed.

### 4. Run the CLI

```bash
npm start
```

---

## Available Commands

### Show Help

```bash
npm start help
```

---

### Add a Task

```bash
npm start add "Buy Milk"
```

---

### Update a Task

```bash
npm start update <id> "Buy Bread"
```

Example:

```bash
npm start update 1751726700000 "Buy Bread"
```

---

### Delete a Task

```bash
npm start delete <id>
```

Example:

```bash
npm start delete 1751726700000
```

---

### List All Tasks

```bash
npm start list
```

---

### List Tasks by Status

#### Todo

```bash
npm start list todo
```

#### In Progress

```bash
npm start list in-progress
```

#### Done

```bash
npm start list done
```

---

### Mark Task as In Progress

```bash
npm start mark-in-progress <id>
```

---

### Mark Task as Done

```bash
npm start mark-done <id>
```

---

### Mark Task as Todo

```bash
npm start mark-todo <id>
```

---

## Task Model

Each task is stored in `db/tasks.json` using the following structure:

```json
{
  "id": 1751726700000,
  "description": "Buy Milk",
  "status": "todo",
  "createdAt": "2026-07-05T10:30:00.000Z",
  "updatedAt": "2026-07-05T10:30:00.000Z"
}
```

---

## Tech Stack

* Node.js
* CommonJS Modules
* File System (`fs`)
* JSON File Storage

---

## Future Improvements

* Unit tests
* Asynchronous file operations
* Better CLI formatting
* Input validation enhancements
* Migration to Express.js REST API
* Database integration (MongoDB/PostgreSQL)
* Authentication

---

## Learning Objectives

This project was built to understand:

* Node.js fundamentals
* CommonJS modules
* Command-line applications
* File handling with `fs`
* JSON parsing and serialization
* Modular architecture
* CRUD operations
* Separation of concerns

---
