## Node.js Github oAuth

How to the run the server

1. Register your new application on Github : https://github.com/settings/applications/new. In the "callback URL" field, enter "http://localhost:9000/github-callback". Once you register, you will get a client ID and client secret.
2. Replace the values of the `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` variables in the [controller.js](/controller.js) file
3. Install dependencies by executing: `npm install` or `yarn`.
4. Start the server by executing `npm run dev`
5. Navigate to http://localhost:9000/github on your browser. (trigger the oauth by github)
