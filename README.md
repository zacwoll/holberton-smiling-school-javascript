# Smiling School by Holberton - JavaScript Edition

Smiling School by Holberton - JavaScript Edition is a revamped version of the original [Smiling School](https://github.com/zacwoll/holberton-smiling-school) project. This edition enhances the functionality of the original project with the addition of JavaScript, providing a more interactive and dynamic user experience.

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Project Structure](#project-structure)
- [Highlights and Insights](#highlights-and-insights)
- [License](#license)

## Live Demo

This project is split across three web pages, which are hosted on GitHub Pages:

- [Homepage](https://zacwoll.github.io/holberton-smiling-school-javascript/)
- [Courses](https://zacwoll.github.io/holberton-smiling-school-javascript/courses.html)
- [Pricing](https://zacwoll.github.io/holberton-smiling-school-javascript/pricing.html)

Navigation works on each page, allowing you to explore different sections by clicking the links in the top right corner. Note that due to project constraints, the login functionality is not implemented.

## Features

- Loading animations for dynamic assets
- Integration with the `https://smileschool-api.hbtn.info/courses` API for fetching course information
- Component-based approach for rendering sections with HTML, CSS, and JavaScript
- Responsive design using Bootstrap

## Project Structure

The project is organized as follows:

- homepage.html: The main homepage file
- courses.html: The courses page file
- pricing.html: The pricing page file
- scripts.js: The main JavaScript file
- assets: A folder containing all necessary images and assets

## Highlights and Insights

This project provided valuable insights into various aspects of JavaScript development and working with APIs. Some notable highlights include:

- Creating a loading animation for dynamic assets: A loader is displayed while the content is being fetched and replaced once the data is fully loaded.
- Decoupled development: This project demonstrated the power of working with a pre-built API (`https://smileschool-api.hbtn.info/courses`) for fetching and rendering data, leading to a better understanding of application development.
- Component-based approach: In `scripts.js`, components are created to accept data and render whole sections of HTML and CSS, using Bootstrap and data fetched from the `https://smileschool-api.hbtn.info/quotes` endpoint.

## License

This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.
