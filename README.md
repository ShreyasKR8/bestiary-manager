# Bestiary Manager

A full-stack inventory and classification management application themed around a fantasy bestiary system. Built with Node.js, Express, PostgreSQL, and EJS, the application allows users to organize, manage, and categorize creatures with a clean server-rendered workflow.

The project focuses on backend architecture, relational database design, CRUD operations, validation, and deployment practices commonly used in production web applications.

---

## Live Demo

**Live Site:** [https://bestiary-manager.onrender.com/](https://bestiary-manager.onrender.com/)

---

## Features

* Full CRUD functionality for monsters and monster categories
* PostgreSQL relational database integration
* Server-side rendering using EJS templates
* Express.js routing and MVC-style project structure
* Form validation and sanitization using express-validator
* Responsive UI with custom CSS styling
* Confirmation modals and protected deletion workflows
* Category-based filtering and organization
* Persistent relational data handling
* Error handling for invalid operations and constraints
* Environment-based configuration support
* Deployed frontend and backend hosting

---

## Tech Stack

### Backend

* Node.js
* Express.js
* PostgreSQL
* pg
* express-validator

### Frontend

* EJS
* HTML5
* CSS3
* JavaScript

### Deployment & Tools

* Render
* GitHub
* Neon PostgreSQL

---

## Project Structure

```bash
bestiary-manager/
├── controllers/
├── db/
├── node_modules/
├── public/
│   ├── css/
│   ├── images/
│   └── js/
├── routes/
├── views/
├── .env
├── .gitignore
├── app.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

---

## Database Design

The application uses PostgreSQL with relational tables for:

* Monsters
* Monster Categories

Relationships are structured to maintain category integrity while preventing invalid deletions when dependent records exist.

---

## Key Functionalities

### Monster Management

* Create new monster entries
* Edit existing records
* Delete monsters safely
* View detailed monster information

### Category Management

* Create and manage monster categories
* Prevent deletion of categories currently in use
* Browse monsters by category

### Validation & Security

* Input sanitization
* Server-side validation
* Protected form handling
* Constraint-aware deletion logic

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ShreyasKR8/bestiary-manager.git
```

### 2. Navigate into the project directory

```bash
cd bestiary-manager
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_postgresql_connection_string
```

### 5. Start the development server

```bash
npm start
```

---

## Deployment

The project is deployed using:

* Render for application hosting
* Neon for PostgreSQL database hosting

---

## Future Improvements

* Authentication and role-based access
* Image upload support for monsters
* Search and advanced filtering
* Pagination support
* REST API endpoints
* React frontend migration

---

## What This Project Demonstrates

* Full-stack application development
* Relational database design
* CRUD architecture
* Backend routing and controller organization
* Server-side rendering workflows
* Production deployment practices
* Form validation and secure input handling
* Real-world inventory management concepts

---

## Author

**Shreyas K R**

GitHub: [https://github.com/ShreyasKR8](https://github.com/ShreyasKR8)
