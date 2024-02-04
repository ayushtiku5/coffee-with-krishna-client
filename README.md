## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Deployment on Google App Engine
1. Create a production build by running `ng build --configuration production`.
2. In `package.json`, update `scripts.start` value to `node server.js`.
3. Run `gcloud app deploy`.
