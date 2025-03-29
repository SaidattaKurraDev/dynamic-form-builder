# DynamicFormBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Project Overview

The DynamicFormBuilder contains two panels:

- **Admin Panel**: Build and save dynamic forms
- **User Panel**: Fill and submit saved forms

Form configurations are stored using NgRx Store, synced with localStorage, and persisted via JSON Server.

---

## Admin Panel (Form Builder)

- Built using standalone Angular components with Angular Material UI.
- Supports adding input fields:
  - Text, Textarea, Date, Select, Radio, Checkbox.
- Each field can be configured:
  - Label, Placeholder, Help text, Required validation.
  - Options for Select, Radio, and Checkbox fields.
- Tooltips provide field configuration details (clean UI).
- Form templates saved to NgRx store and localStorage.
- Dynamic form validations based on configuration.

---

## User Panel (Form Submission)

- Displays saved form templates.
- Dynamically loads selected forms.
- Renders fields based on saved configurations.
- Validates required fields dynamically.
- After submission, values are displayed and stored locally.

---

## State Management (NgRx)

- Utilizes Store, Actions, Reducers, and Selectors.
- Form templates stored in `formTemplates` state slice.
- State synced with localStorage and persisted with JSON Server (`db.json`).

---

## Authentication

- Simple Auth Service with username/password authentication using JSON Server:

```json
"users": [
  {"id": 1, "email": "admin@formBuilder.com", "password": "admin123", "role": "admin"},
  {"id": 2, "email": "user@formBuilder.com", "password": "user123", "role": "user"}
]
```
- Login validation via JSON server.
- Auth token stored in localStorage.

---

## Testing

- Unit tests provided for:
  - Authentication Service.
  - Form submission logic.
- Execute tests via Karma (`ng test`).

---

## Development Setup

### Install Dependencies
```bash
npm install
```

### Run Development Server

```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/)

### JSON Server Setup

Ensure JSON Server is installed:
```bash
npm install -g json-server
```

Start JSON server:
```bash
json-server --watch db.json --port 3000
```

Server available at [http://localhost:3000](http://localhost:3000)

---

## Building Project

```bash
ng build
```

Artifacts stored in the `dist/` directory.

---

## Code Generation

Generate components, directives, services, etc.:

```bash
ng generate component component-name
```

---

## Testing

Run unit tests:

```bash
ng test
```

Run end-to-end tests (after adding e2e testing package):

```bash
ng e2e
```

---

## Further Help

Angular CLI help:

```bash
ng help
```

See [Angular CLI Overview and Command Reference](https://angular.io/cli) for detailed guidance.
