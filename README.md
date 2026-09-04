
# React Development
A structured, project-driven journey through modern React development, focused on understanding frontend engineering fundamentals through progressively more complex, hands-on applications.
This repository documents the transition from React fundamentals to interactive, state-driven applications, reusable component architectures, controlled forms, event-driven interfaces, and increasingly scalable frontend engineering patterns.
The objective is not to memorize React APIs in isolation, but to understand the engineering principles behind component-based UI development, state management, event handling, data flow, user interaction, and application architecture.
---
## 📚 Learning Progress
| Stage | Focus | Project |
|---|---|---|
| Day 1 | React fundamentals, JSX, components, props, project structure | React Fundamentals Project |
| Day 2 | State, events, inputs, dynamic UI, user interaction | Interactive React Project |
| Day 3 | Component architecture, state-driven application logic, conditional rendering | Mystery Quiz |
| Day 4 | Events, controlled forms, form state, submission handling | ReturnRescue |
---
# Day 1 — React Fundamentals
## Core Concepts
The first stage focused on understanding the fundamental building blocks of React.
Topics covered:
- React fundamentals
- JSX
- Functional components
- Component structure
- Component composition
- Props
- Passing data between components
- Rendering components
- Vite + React project structure
- `main.jsx`
- `App.jsx`
- CSS integration
- Separation of UI into reusable components
## Engineering Focus
The primary goal was to understand React's component-based architecture rather than treating a web application as one large HTML document.
The interface was divided into smaller components, with each component having a clear responsibility.
This introduced the foundation for building larger applications through composition rather than monolithic UI structures.
---
# Day 2 — State & Interactivity
Day 2 moved from static interfaces toward dynamic applications that respond to user interaction.
## Core Concepts
- `useState`
- State initialization
- Updating state
- State-driven rendering
- Event handlers
- `onClick`
- Input state
- Conditional rendering
- Component re-rendering
- State vs normal JavaScript variables
- Passing functions through props
- Handling user interactions
## Engineering Focus
The key mental model introduced was:
```text
User Interaction
       ↓
State Update
       ↓
React Re-render
       ↓
Updated UI

Instead of manually manipulating the DOM after every interaction, application state becomes the source of truth for the interface.

This establishes a predictable relationship between application state and what the user sees.

⸻

Day 3 — Mystery Quiz

🎯 Project Overview

Mystery Quiz is an interactive quiz application built to combine the React concepts introduced during the previous stages into a complete state-driven application.

The application contains 10 mystery questions with multiple-choice answers.

Users can:

1. Read a mystery question
2. Select an answer
3. Receive immediate feedback
4. Earn a point for a correct answer
5. Automatically progress to the next question
6. View their final score
7. Restart the quiz

⸻

🧠 React Concepts Applied

Component Architecture

The interface is separated into focused components:

App
├── Header
├── MysteryQuestion
├── AnswerOptions
└── Result

Each component has a specific responsibility, reducing the amount of UI logic contained inside a single component.

State Management

The application uses React state to manage:

* score
* currentQuestion
* quizFinished
* feedback
* answered

This allows the interface to automatically respond to changes in application state.

Props

Data and callback functions are passed from parent components to child components.

For example:

App
 ↓
MysteryQuestion
 ↓
Question Data

And:

App
 ↓
AnswerOptions
 ↓
onAnswer()

This demonstrates parent-to-child data flow and callback-based communication from child components back to the parent.

Conditional Rendering

Different parts of the interface are rendered according to the current application state.

Quiz Active
     ↓
Question + Answers + Feedback
Quiz Finished
     ↓
Final Result Screen

Event Handling

Answer buttons trigger React event handlers.

The selected answer is passed back to the parent component, where it is evaluated against the correct answer.

Functional State Updates

When updating state based on its previous value, the application uses:

setScore((prevScore) => prevScore + 1);

This ensures the update is calculated from the latest state value.

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

Application Starts
       ↓
Question 1 Displayed
       ↓
User Selects Answer
       ↓
Answer Evaluated
       ↓
      Correct?
      ↙     ↘
    YES      NO
     ↓        ↓
 Score +1   Score Unchanged
      ↘      ↙
       Feedback
          ↓
    Next Question
          ↓
       Repeat
          ↓
      Question 10
          ↓
     Quiz Complete
          ↓
      Final Score
          ↓
       Play Again
          ↓
      State Reset

⸻

Day 4 — ReturnRescue

🎯 Project Overview

ReturnRescue is a privacy-first lost-and-found reporting prototype.

The concept is designed around a simple problem:

Someone finds a lost item, but helping return it should not require unnecessary exposure of private information.

The Day 4 implementation focuses on building the frontend interaction engine using React events, controlled inputs, form state, and form submission handling.

The project intentionally remains frontend-focused at this stage. Backend services, APIs, databases, authentication, AI matching, and other production infrastructure are outside the scope of Day 4.

⸻

🧠 Core Concepts

React Events

The application uses React event handlers to respond to user interactions.

Examples include:

onChange
onSubmit
onClick

The core event-driven model is:

User Action
     ↓
React Event
     ↓
Handler Function
     ↓
Application Logic
     ↓
State Update
     ↓
Updated UI

⸻

Controlled Inputs

Each form input is controlled by React state.

Example:

const [item, setItem] = useState("");

The input is connected to that state:

<input
  value={item}
  onChange={(event) => setItem(event.target.value)}
/>

The resulting flow is:

User Types
     ↓
onChange
     ↓
event.target.value
     ↓
setItem(...)
     ↓
State Updates
     ↓
React Re-renders

This establishes React state as the source of truth for the input.

⸻

Understanding useState

The form uses useState to give the component a piece of state that can change over time.

For example:

const [item, setItem] = useState("");

This creates:

* item — current state value
* setItem — function used to update the state
* "" — initial value

When the user types:

User types:
Black chain
        ↓
onChange detects the change
        ↓
event.target.value
        ↓
"Black chain"
        ↓
setItem("Black chain")
        ↓
item becomes "Black chain"

The important distinction is that useState stores the value, while onChange detects the user’s interaction and setItem updates the state.

⸻

Form State

ReturnRescue maintains independent state for each piece of information:

item
location
when
description

Example:

const [item, setItem] = useState("");
const [location, setLocation] = useState("");
const [when, setWhen] = useState("");
const [description, setDescription] = useState("");

Each field follows the same controlled-input pattern.

⸻

Event Target

React provides information about the event through the event object.

For example:

onChange={(event) => setItem(event.target.value)}

The concepts are:

event
  ↓
Information about the event
event.target
  ↓
The element where the event occurred
event.target.value
  ↓
The current value inside that element

For a text input:

User types "Black wallet"
          ↓
event.target.value
          ↓
"Black wallet"

⸻

Form Submission

The form uses:

<form onSubmit={handleSubmit}>

The submission handler prevents the browser’s default form behavior:

function handleSubmit(event) {
  event.preventDefault();
}

This allows the React application to control what happens after submission.

⸻

Submission State

The application also maintains submission state:

const [submitted, setSubmitted] = useState(false);

After the form is submitted:

setSubmitted(true);

The interface then renders a success state based on the updated state.

The complete flow becomes:

User Fills Form
       ↓
onChange Events
       ↓
React State Updates
       ↓
User Clicks Submit
       ↓
onSubmit
       ↓
handleSubmit()
       ↓
preventDefault()
       ↓
setSubmitted(true)
       ↓
React Re-renders
       ↓
Success Message

⸻

📝 ReturnRescue Form Fields

The current prototype collects:

* Item name
* Found location
* Time found
* Item description

Example:

Item:
Black wallet
Location:
Central Park
When:
