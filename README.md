# Contribution Guide

### A step by step guide to how to add yourself to the members list on the website

A video version of this guide can be found here: https://spectra.video/w/grq4Zr6rofFbef5di5iSqa

## Step 1: Set up Git (and Python):

Follow this guide for help setting it up:
https://docs.github.com/en/github-ae@latest/get-started/quickstart/set-up-git
This is the hardest part, and we recommend doing so in club so that we can answer questions while you do this.

After you have set up git, check to see whether you have Python installed on your computer by running in your terminal the following command: 
```sh
python --version
```
If you receive an error, then you need to install python. Do so by running the following command in your terminal: > python

## Step 2: Fork the repository:

A fork is a personal copy of someone else's repository. You can make whatever changes you want without messing up anyone else's work.
At the top of this page is a "fork" button. Click this button to make a personal copy of the obiesource website repository.

## Step 3: Clone the repository locally:

1. Navigate to your forked repository
   - If github doesn't automatically take you there, you can click your avatar in the top right corner > My repositories > obiesource.github.io
2. Click Code, and copy the link
3. Open a terminal on your computer (e.g. Command Prompt for Windows)
4. Navigate to where you want to store the repository locally
5. Enter the following command in your terminal:
   ```sh
   git clone {the-link-you-copied}
   ```
6. Make a new branch (optional):
   - enter the following commands:
      ```sh
      git checkout -b new-member
      ```

## Step 4: Make changes:

1. Navigate to .../obiesource.github.io/members
2. Make a copy of template.json
3. Rename the copy {your-last-name}.json
4. Edit the document with your own personal information. All fields are optional (just delete them to remove them from the page)
5. Edit memberslist.json, and add yourself to the members field
   - the addition should look like this: `{"name": "Your Name", "href": "/member.html?{your-last-name}"}`
   - correct spelling and quotation and comma placement are very imporant

## Step 5: Test your changes:

1. In your terminal, navigate to .../obiesource.github.io/
2. Run the following command:
   ```sh
   python3 -m http.server --bind 127.0.0.1 8000
   ```
3. In your favorite web browser, navigate to <http://127.0.0.1:8000/>. Click the link to the members directory.
4. You should see a page that includes your name. Click on it.
   - If you don't see your name, check the spelling, quotations, and commas in your entry in memberslist.json
5. You should see a page with all your information on it!
   - If you see an error message, try to fix the error in members/{your-last-name}.json

## Step 6: Push the repository:

1. In your terminal, navigate to .../obiesource.github.io/
2. Run the following commands:
   ```sh
   git add members/{your-last-name}.json memberslist.json  
   git commit -m "Adding myself to the members list"  
   git push
   ```

## Step 7: Make a pull request

A pull request is a request to have the changes from your forked repository added to the origin repository.

1. Open your forked repository in github.
2. Above your files should be a message that says "This branch is 1 commit ahead of ObieSource/obiesource.github.io:main."
   - If the message says "This branch is X commits _behind_ ObieSource/...:main", click Fetch Upstream > Fetch and Merge
3. Click Contribute > Open pull request > Create pull request
4. Now just wait! We'll review the additions and either give you feedback or accept the request!


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
