---
applyTo: '**'
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.# GitHub Copilot Instructions and Guidance  
_This file provides detailed prompts, expectations, and style guidelines to help GitHub Copilot generate high-quality code and documentation for coursework based on the “CS 465 Full Stack Guide”._

---

## General Objectives for Copilot

When assisting in this project, always prioritize the following:
- Conformance to the CS 465 standards for full stack development.
- Clear, readable, and maintainable code with comments where appropriate.
- Progressive enhancement and accessibility.
- Industry-standard best practices in React, Node/Express, and REST.

---

## High-Level Guidance

| Area | Direction |
|------|----------|
| Architecture | Follow Model-View-Controller patterns whenever possible. Keep concerns separated and keep components modular. |
| React | Use functional components and React Hooks (`useState`, `useEffect`, `useContext`). Avoid class-based components. |
| Backend (Express) | Structure routes, controllers, and services in separate files. Use `async/await` for all IO calls and include `try/catch` blocks for error handling. |
| Database | Use parameterized queries or ORM for SQL operations to avoid injection. |
| API Design | Adhere to REST conventions: use proper HTTP verbs and plural nouns for resource names. |
| Error Handling | Provide descriptive error messages and avoid exposing sensitive information. |
| Git / Documentation | Commit frequently with meaningful commit messages. Use descriptive README files for context.

---

## Folder and File Layout Example

```text
.
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── App.jsx
├── server
│   ├── controllers
│   ├── routes
│   ├── services
│   └── index.js
└── db
    └── schema.sql
