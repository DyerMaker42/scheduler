# Interview Scheduler

Scheduler is a React SPA (single page application designed) to assist users of a to book and update mock interviews with the school's mentors. This is for educational purposes, as part of the Lighthouse Labs React curriculum.

## Setup

Install dependencies with `npm install`.

Visit http://localhost:8000 in the browser.

## Connecting to the API

Fork and clone the [scheduler-api](https://github.com/lighthouse-labs/scheduler-api) into a new directory and follow the database setup instructions. You must add http://localhost:8001 as a proxy in your package.json.

Run the API server in a new terminal with `npm start`. View the API at http://localhost:8001/api/*

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Screenshots

### Delete 
!["The popup and promt for the delete confirmation state"](https://github.com/DyerMaker42/scheduler/blob/master/docs/Scheduler_Confirmation.png?raw=true)

### Edit
!["The popup and promt for the edit interview state"](https://github.com/DyerMaker42/scheduler/blob/master/docs/Scheduler_Edit.png?raw=true)

### Empty Schedule 
!["View of page when schedule empty for given day"](https://github.com/DyerMaker42/scheduler/blob/master/docs/Scheduler_Empty.png?raw=true)

### Full Use Page
!["View of page with a full day of interviews"](https://github.com/DyerMaker42/scheduler/blob/master/docs/Scheduler_Full_Screen.png?raw=true)