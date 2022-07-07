# NBA Salary Cap Tracker

AngularTS app to view the salary cap totals and contracts for NBA teams.

## SSR / Prerender Routes

The app uses [Angular Universal](https://angular.io/guide/universal) for server-side rendering and prerendered routes.

## Firebase

Firebase functions, hosting, and database are used for NBA Salary Cap Tracker.

Run `firebase deploy` to deploy to the Firebase production app.

## Local development

Run `npm run dev && firebase emulators:start` to build the SSR app and bring up the emulators for functions and hosting. The frontend will automatically request the cloud functions at the correct localhost location.

NOTE: The functions emulator will be talking to the production database. Navigate to `http://localhost:5000/`.

The app will require rebuilding if changes are made (due to SSR and prerendering). To serve the a non-ssr version of the app on a development server, use `ng serve`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
