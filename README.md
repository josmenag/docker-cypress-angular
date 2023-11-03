## cypress-angular-docker

Automation project using Cypress to test an Angular app using Docker containers

### Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)

### Project Description

This project creates an Angular project image on a Docker container and another Docker container runs a Cypress project which targets the first container's image as system under test

### Features

- Docker containers
- Docker compose yml file

### Getting Started

1. Install node.js latest version, make sure to install npm

   - run the npm install in the root of the project ( 'npm install')

2. Install Prettier

   - run the npm install command using the command line: npm install prettier --save-dev

3. Download and install Docker

4. Open terminal on root to run commands

   - cd my-app
   - docker build ./ -t my-app-local --no-cache
   - cd ..
   - cd cypress
   - docker build ./ -t cypress-local --no-cache
   - cd ..
   - docker-compose up

### Contact Information

- Email: josmenag@gmail.com
- Linkedin: https://www.linkedin.com/in/jose-mendez-489446ba/
