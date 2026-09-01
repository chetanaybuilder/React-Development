💰 Money Calculator

A clean, minimal money-tracking interface built with React and Vite as part of my React development journey.

The project focuses on learning the fundamentals of React component architecture, JSX, JavaScript expressions, and reusable UI components while building something small and practical.

Status: Day 1 React Learning Project 🚧
Current version: Static prototype

⸻

✨ Overview

Money Calculator is a lightweight interface for viewing income, spending, remaining balance, and a simple breakdown of expenses.

The current version uses static data intentionally because the primary goal of this project is to practice React fundamentals and component-based architecture.

Future versions can evolve this into a fully interactive personal finance tool as more React concepts are learned.

⸻

🎯 Features

* 💰 Income overview
* 📊 Total spending calculation
* 💵 Remaining balance calculation
* 🧾 Expense breakdown
* ⚛️ Component-based React architecture
* 🎨 Clean and minimal responsive UI
* 📱 Basic mobile-friendly layout

⸻

🧠 React Concepts Practiced

This project was built while learning the fundamentals of React.

Core concepts

* React application setup with Vite
* JSX
* Functional components
* Component architecture
* Import and export
* Rendering components
* JavaScript expressions inside JSX
* Separating UI into reusable components
* Basic CSS styling
* React project structure

⸻

🏗️ Project Architecture

The application is divided into small UI components instead of keeping everything inside one large file.

src/
│
├── components/
│   ├── Header.jsx
│   ├── MoneySummary.jsx
│   └── ExpenseList.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

Component responsibilities

main.jsx

The entry point of the React application. It connects React to the root element in index.html and renders the App component.

App.jsx

Acts as the main application component and combines the smaller UI components.

Header.jsx

Contains the application heading and introductory text.

MoneySummary.jsx

Handles the income, spending, and remaining-balance calculations.

ExpenseList.jsx

Displays the individual expense categories.

App.css

Contains the main application styling.

index.css

Contains global CSS rules.

⸻

🛠️ Tech Stack

* React
* Vite
* JavaScript
* HTML
* CSS
* ESLint

⸻

🚀 Getting Started

1. Clone the repository

git clone YOUR_REPOSITORY_URL

2. Enter the project

cd money-calculator

3. Install dependencies

npm install

4. Start the development server

npm run dev

5. Open the local development URL

Vite will provide a local URL such as:

http://localhost:5173/

⸻

📌 Current Limitations

This is intentionally a Day 1 learning project, so the current version does not include:

* User input
* Dynamic expense creation
* Persistent data storage
* Authentication
* Database integration
* Advanced state management
* Backend functionality

The displayed financial data is currently static.

⸻

🔮 Future Improvements

As I progress through React, this project can be upgraded with:

* Interactive income input
* Add and remove expenses
* React state management
* Dynamic calculations
* Expense categories
* Local storage
* Transaction history
* Data visualization
* Responsive improvements
* Backend integration
* Database persistence

⸻

📚 Learning Goal

The purpose of this project is not to build a production-ready finance application.

The goal is to learn by building.

This project represents the first step in my React development journey, starting with the fundamentals and gradually progressing toward larger and more advanced applications.

⸻

👨‍💻 Project Journey

This project is part of my React Development learning roadmap.

The plan is to build multiple small projects, with each project introducing and reinforcing new React concepts.

React Fundamentals
       ↓
Components
       ↓
Props
       ↓
Events
       ↓
State
       ↓
Forms
       ↓
Lists
       ↓
Effects
       ↓
APIs
       ↓
Routing
       ↓
Advanced React

⸻

📄 License

This project is created for educational and learning purposes.
