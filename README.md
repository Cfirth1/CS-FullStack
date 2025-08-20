# travlr – Full Stack Web Application

## Overview

This project represents the culmination of the full stack development process in CS 465. It incorporates both customer-facing functionality and administrative features, including the implementation of secure login authentication. The travlr application demonstrates proficiency across the full stack development lifecycle, including frontend and backend development, database integration, API implementation, testing methodologies, and security considerations.

---

## Architecture

In this project, multiple approaches to frontend development were utilized in order to support the different needs of the application. The customer-facing views were created using Express-rendered HTML pages combined with CSS and JavaScript for dynamic functionality. These pages are rendered server-side, which allows for reliable delivery of content and direct integration with the underlying routing logic in Express. JavaScript was used to introduce interactivity and handle events within the HTML pages. Because this project followed a traditional multi-page application structure rather than a full single-page application (SPA), each route produces a newly rendered HTML page, keeping the frontend logic straightforward and well organized.

On the backend, the application uses a NoSQL MongoDB database. The decision to use MongoDB was guided by its flexibility and ability to store unstructured data in JSON-like documents. A NoSQL database offers fast querying for large datasets and is well suited to applications that may require scalability or need to evolve their data models without major refactoring. Additionally, MongoDB integrates seamlessly with Node.js and Express through Mongoose, allowing the backend to perform CRUD operations efficiently.

---

## Functionality

JSON (JavaScript Object Notation) is a lightweight data format used for transferring data between the frontend and backend. Unlike JavaScript, which is a full programming language, JSON is strictly a data-interchange format. During the full stack development process for this application, JSON allowed for smooth communication between the frontend and backend by serializing responses and requests in a format that could be easily parsed and used by JavaScript on both sides of the stack.

Throughout the development process, several portions of the codebase were refactored in order to improve functionality, performance, and maintainability. For example, repeated UI elements—such as forms and navigation menus—were refactored into reusable partials using Express. By isolating these components, the application achieved better consistency and reduced redundancy, allowing updates to be made in one location rather than across multiple files. This approach improves long-term maintainability and reduces the risk of errors when changes are required.

---

## Testing

A full stack application involves multiple API endpoints that facilitate the transfer of data between the client and server. Each endpoint requires appropriate testing to confirm correct handling of request types, response formats, and error conditions. Methods such as GET, POST, PUT, and DELETE must be verified to ensure they are processing data correctly and returning the expected responses.

Testing becomes more complex when authentication and authorization layers are implemented. In travlr, the introduction of secure login functionality for the administrative dashboard required that protected routes be tested to verify that only authorized users can access specific resources. This includes validating session handling and proper redirection to the login page when a user attempts to access secure areas without authentication. Through these tests, the application ensures that sensitive data remains protected while still providing a smooth user experience for authorized users.

---

## Reflection

This course has significantly contributed to my professional development by strengthening my understanding of both client-side and server-side development. I have gained proficiency in architecting scalable web applications, designing and implementing RESTful APIs, and integrating a NoSQL database into an Express/Node.js environment. The experience of completing a full stack application from initial concept through final deployment has improved my technical capacity and increased my confidence in handling real-world development challenges.

In addition to the technical competencies gained, I have refined key professional skills such as problem solving, code refactoring, and documentation. Finally, the requirement to implement secure authentication provided valuable experience in applying industry best practices for security. Altogether, these experiences have made me a more marketable candidate in the field of web development and have better prepared me for future full stack development roles.

---
