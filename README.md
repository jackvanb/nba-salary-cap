# NBA Salary Cap Tracker

AngularTS app to view the salary cap totals and contracts for NBA teams.

## SSR / Prerender Routes

The app uses [Angular Universal](https://angular.io/guide/universal) for server-side rendering and prerendered routes.

## Firebase

Firebase functions, hosting, and database are used for NBA Salary Cap Tracker.

Run `npm run prerender && firebase emulators:start` to bring up the emulators for functions and hosting. The frontend will automatically request the cloud functions at the correct localhost location.

NOTE: The functions emulator will be talking to the production database.

Run `firebase deploy` to deploy to the Firebase production app.

## Development server

Run `npm run prerender && npm run serve:ssr` for a dev server (not using Firebase). Navigate to `http://localhost:4000/`.

NOTE: The server will be talking to the production database.

The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
