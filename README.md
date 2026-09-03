React Development

A structured React development journey focused on building a strong understanding of modern frontend engineering through progressive, hands-on projects.

This repository documents the transition from fundamental React concepts to building interactive applications with reusable components, state management, event handling, conditional rendering, and clean component architecture.

⸻

📚 Learning Progress

Stage	Focus	Project
Day 1	React fundamentals, components, JSX, props, project structure	React fundamentals project
Day 2	State, events, inputs, dynamic UI, user interaction	Interactive React project
Day 3	Component architecture, state-driven application logic, conditional rendering	Mystery Quiz

⸻

Day 1 — React Fundamentals

Core Concepts

The first stage focused on understanding the fundamental building blocks of React.

Topics covered:

* React fundamentals
* JSX
* Functional components
* Component structure
* Component composition
* Props
* Passing data between components
* Rendering components
* Vite + React project structure
* main.jsx
* App.jsx
* CSS integration
* Separation of UI into reusable components

Engineering Focus

The primary goal was to understand React’s component-based architecture rather than treating a web application as one large HTML file.

The application was divided into smaller components so that each component had a clear responsibility.

⸻

Day 2 — State & Interactivity

Day 2 moved from static UI to dynamic applications.

Core Concepts

* useState
* State initialization
* Updating state
* State-driven rendering
* Event handlers
* onClick
* Form/input state
* Conditional rendering
* Re-rendering
* State vs normal JavaScript variables
* Passing state-related functions through props
* Handling user interactions

Engineering Focus

The key mental model introduced here was:

User interaction → State update → React re-render → Updated UI

Instead of manually manipulating the DOM, application state becomes the source of truth for the interface.

This creates a predictable relationship between application data and what the user sees.

⸻

Day 3 — Mystery Quiz

🎯 Project Overview

Mystery Quiz is a small interactive quiz application built to combine the React concepts learned during the previous stages into one complete application.

The application contains 10 mystery questions with multiple-choice answers.

Users:

1. Read a mystery question
2. Select an answer
3. Receive immediate feedback
4. Earn a point for a correct answer
5. Automatically move to the next question
6. See their final score
7. Restart the quiz

⸻

🧠 React Concepts Applied

The project combines several important React concepts:

Component Architecture

The UI is separated into focused components:

App
├── Header
├── MysteryQuestion
├── AnswerOptions
└── Result

Each component has a specific responsibility.

State Management

The application uses React state for:

score
currentQuestion
quizFinished
feedback
answered

This allows the UI to respond automatically to changes in application state.

Props

Data and callback functions are passed from the parent component to child components.

For example:

App
 ↓
MysteryQuestion
 ↓
question data

and:

App
 ↓
AnswerOptions
 ↓
onAnswer()

This demonstrates parent-to-child communication and callback-based event handling.

Conditional Rendering

Different parts of the interface are rendered depending on the current application state.

For example:

Quiz active
     ↓
Question + answers + feedback
Quiz finished
     ↓
Final result screen

Event Handling

Answer buttons trigger application logic through React event handlers.

The selected answer is passed back to the parent component where it is evaluated against the correct answer.

Functional State Updates

When increasing the score, the application uses the previous state:

setScore((prevScore) => prevScore + 1);

This is important when the new state depends on the previous state.

⸻

🏗️ Project Architecture

React-03-Mystery-Quiz/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MysteryQuestion.jsx
│   │   ├── AnswerOptions.jsx
│   │   └── Result.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
└── package-lock.json

⸻

🔄 Application Flow

Application starts
       ↓
Question 1 displayed
       ↓
User selects answer
       ↓
Answer evaluated
       ↓
Correct?
   ↙         ↘
 YES         NO
  ↓           ↓
Score +1    Score unchanged
   ↘         ↙
    Feedback
       ↓
Next question
       ↓
Repeat
       ↓
Question 10
       ↓
Quiz complete
       ↓
Final score
       ↓
Play Again
       ↓
State reset

⸻

🛠️ Technology Stack

* React — UI development
* JavaScript (ES6+) — application logic
* JSX — component UI syntax
* Vite — development environment and build tooling
* CSS — styling and responsive interface
* Git — version control
* GitHub — source-code management

⸻

📈 Skills Developed

Through these three stages, the learning progression moved from:

React Fundamentals
        ↓
Components
        ↓
Props
        ↓
State
        ↓
Events
        ↓
Dynamic UI
        ↓
Conditional Rendering
        ↓
Component Communication
        ↓
Application Logic
        ↓
Complete Interactive Application

The goal is not simply to memorize React syntax, but to understand how React applications are structured and how data flows through them.

⸻

🎯 Engineering Principles Practiced

1. Component Responsibility

Each component is responsible for a focused part of the interface.

2. Single Source of Truth

Quiz state is maintained in the appropriate parent component instead of creating unnecessary duplicated state.

3. Unidirectional Data Flow

Data flows down through props, while child components communicate events back through callback functions.

4. State-Driven UI

The interface reflects the current application state rather than relying on manual DOM manipulation.

5. Reusability

UI elements are separated into components that can be reused or extended as the application grows.

6. Separation of Concerns

Application logic, UI components, and styling are organized into separate files and responsibilities.

⸻

🚀 Future Improvements

Potential extensions for the project include:

* Question randomization
* Question categories
* Difficulty levels
* Timer-based questions
* Persistent high scores
* Local storage
* Progress animations
* More advanced feedback states
* Backend integration
* Database-backed questions
* Authentication
* Multiplayer functionality

These features can be introduced later as the React learning path progresses.

⸻

📌 Repository Structure

React-Development/
│
├── Day 1/
│   └── React fundamentals
│
├── Day 2/
│   └── State & interactivity
│
└── React-03-Mystery-Quiz/
    └── Complete interactive React application

⸻

📖 Learning Philosophy

This repository follows a build-first engineering approach.

Each project is designed to introduce a small set of concepts, apply those concepts in a working application, and progressively increase the complexity of the architecture.

The objective is to move from:

Syntax → Concepts → Components → State → Architecture → Applications

rather than learning React purely through isolated tutorials.

⸻

Status

Day 1: ✅ Complete
Day 2: ✅ Complete
Day 3: ✅ Complete

Current focus: Building stronger React fundamentals through progressively more complex applications.
