React Development

A project-driven React learning repository focused on building strong frontend engineering fundamentals through small, focused applications.

The goal is to understand how React works, not simply memorize APIs — with emphasis on components, state, data flow, events, forms, and rendering patterns.

⸻

📚 Learning Progress

Day	Focus	Project
01	JSX, Components, Props	React Fundamentals
02	State, Events, Dynamic UI	Interactive React Project
03	State Architecture, Conditional UI	Mystery Quiz
04	Events, Controlled Forms, Form State	ReturnRescue
05	Lists, .map(), Keys, Conditional Rendering	Availability Board

⸻

Day 01 — React Fundamentals

Focus

* JSX
* Functional components
* Props
* Component composition
* Project structure
* CSS integration
* Parent → child data flow

Engineering Principle

Build interfaces through small, focused components rather than monolithic UI.

⸻

Day 02 — State & Interactivity

Focus

* useState
* State initialization & updates
* Event handlers
* onClick
* Dynamic rendering
* Input state
* State vs JavaScript variables
* Passing functions through props

Core Model

User Action
    ↓
State Update
    ↓
Re-render
    ↓
Updated UI

⸻

Day 03 — Mystery Quiz

Project

An interactive 10-question quiz demonstrating state-driven application logic.

React Concepts

* Component architecture
* useState
* Props
* Callback functions
* Event handling
* Conditional rendering
* Functional state updates

Architecture

App
├── Header
├── MysteryQuestion
├── AnswerOptions
└── Result

Core Flow

Question
   ↓
User Answer
   ↓
Evaluate
   ↓
Update State
   ↓
Feedback
   ↓
Next Question
   ↓
Result

⸻

Day 04 — ReturnRescue

Project

A privacy-first lost-and-found reporting prototype focused on React form handling.

React Concepts

* React events
* Controlled inputs
* useState
* onChange
* onSubmit
* event.target.value
* preventDefault()
* Submission state
* Conditional UI

Core Model

User Input
    ↓
onChange
    ↓
React State
    ↓
Form Submit
    ↓
State Update
    ↓
Updated UI

⸻

Day 05 — Availability Board

Project

A lightweight resource availability dashboard built to practice data-driven rendering.

Study Room A   🟢 Available
Study Room B   🔴 Occupied
Study Room C   🟢 Available
Study Room D   🟡 Cleaning

React Concepts

* Arrays of objects
* .map()
* React key
* Conditional rendering
* Dynamic CSS classes
* Data-driven UI
* Component separation

Architecture

App
├── Header
└── AvailabilityList
Data
└── rooms.js

Core Model

Data
  ↓
.map()
  ↓
React Elements
  ↓
Conditional UI

⸻

🛠️ Stack

React · JavaScript · JSX · Vite · CSS · Git · GitHub

⸻

📌 Repository Note

This is a learning-project repository.

The projects are intentionally small and concept-focused. They are designed to strengthen React fundamentals through implementation, experimentation, debugging, and iteration.

They are not intended to represent production-ready applications.

⸻

🌐 Access

Each project can be run and accessed locally through its development server at:

http://localhost:5173

Run a project with:

npm install
npm run dev

The exact localhost port may vary if the default port is already in use.

⸻

🎯 Philosophy

Learn → Build → Debug → Refactor → Repeat

Each project isolates a specific React concept before progressing toward more advanced frontend engineering.

⸻

🚀 Direction

React Fundamentals → State Management → Component Architecture → Data-Driven UI → Advanced React → Production Applications

⸻

👨‍💻 Author

Chetanay Builder
