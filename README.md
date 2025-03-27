# DynamicFormBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.
This project has two panels:

Admin Panel to build and save dynamic forms

User Panel to fill and submit saved forms

Forms and their configurations are stored using NgRx Store and also synced with localStorage and JSON Server.
Admin Panel (Form Builder)
Built with standalone Angular components and Material UI

Click to add input fields like:

Text, Textarea, Date, Select, Radio, Checkbox

Each field can be configured:

Label, Placeholder, Help text, Required

Options for Select/Radio/Checkbox

Tooltips used for field config (clean UI)

Form templates are saved to NgRx store + localStorage

Form validations (e.g., required fields) are set dynamically
User Panel (Form Submission)
Shows list of saved templates

Loads selected form dynamically

Fields rendered based on type

Required validation handled
After submission, values are displayed and saved locally

## State Management (NgRx)
Used Store, Actions, Reducers, and Selectors to handle template state

Form templates stored in formTemplates state slice

Synced with localStorage + used db.json for persistence

## Authentication
Simple Auth Service created with username/password:
"users": [
      {
        "id": 1,
        "email": "admin@formBuilder.com",
        "password": "admin123",
        "role": "admin"
      },
      {
        "id": 2,
        "email": "user@formBuilder.com",
        "password": "user123",
        "role": "user"
      }
Login page connects to JSON server and validates credentials
Auth token stored in localStorage

## Auth Tests
Unit tests written for the Auth Service and Form Submission

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Json Server
JSON Server (for db.json)
Make sure to install JSON Server globally if not already:
npm install -g json-server
Start the JSON server:

json-server --watch db.json --port 3000
This will run the backend at:
http://localhost:3000

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
