# Notes App

Welcome to the Notes App project! This is my first React project, created by following a course and tutorial from Dennis Ivy. The app allows users to create, view, edit, and delete notes. I used a JSON file as the database in my development setup.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Requirements](#requirements)
- [Installation](#installation)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Features
- Create new notes
- View existing notes
- Edit notes
- Delete notes
- Persistent storage using a JSON database
- Auto-save notes
- Automatic title generation in notes list 


## Screenshots
(Add screenshots of your application here to give users a visual idea of what the app looks like.)

## Requirements
- Node.js
- npm
- json-server 

## Installation
Follow these steps to get the project up and running on your local machine:

1. **Install Node.js:**
    [Nodejs.org](https://nodejs.org/en/download/package-manager)
   
2. **Clone the repository:**
    ```bash
    git clone https://github.com/Sch-Steve/mynotes
    cd mynotes
    ```

3. **Install json-server:**
    ```bash
    npm install -g json-server
    ```

4. **Run the JSON server:**
    ```bash
    json-server --watch db.json --port 5000
    ```
    Make sure that the cloned db.json file is used and not the one that comes with the installation of json-server.

5. **Run the development server:**
    ```bash
    npm start
    ```

6. **Open the app in your browser:**
    Navigate to `http://localhost:3000` in your web browser.

## Acknowledgements
- **Dennis Ivy**: For the course and tutorial that guided the creation of this project.

## Contact
If you have any questions, feel free to reach out to me:

- GitHub: [Sch-Steve](https://github.com/Sch-Steve)
- Email: [steveschoder@gmail.com](mailto:steveschoder@gmail.com)
- LinkedIn: [Steve Schoder](https://www.linkedin.com/in/steve-schoder/)
