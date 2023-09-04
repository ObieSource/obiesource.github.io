# Contribution Guide

Please feel free to ask us for help in the Discord or in person!
And if you think this guide can be improved, please tell us -- or make the changes yourself in a pull request by clicking the pencil icon a little above this paragraph and to the right.

## Step 1: Set up Git:

Follow this guide for "Setting up Git" and "Authenticating with GitHub from Git":
<https://docs.github.com/en/github-ae@latest/get-started/quickstart/set-up-git#setting-up-git>.
This is the hardest part, and we recommend doing so in club so that we can answer questions while you do this.

## Step 2: Set up Node.js

Node.js is a way to run JavaScript from outside of a Web browser. You'll need it in order to preview the website with your changes.
Install Node.js from here: <https://nodejs.org/en/download>.

> **NOTE:** It is possible to skip this step if you're making a small change, but once you start making larger contributions, you'll want to be able to check that your changes actually worked.

To check whether you have Node set up right, open a terminal on your computer (e.g. Terminal for Mac; PowerShell or Git Bash for Windows). Type the command `node -v`. If it prints a version number (e.g. `v18.17.1`), it's working. If it prints something like `command not found`, it's not working.

## Step 3: Fork the repository:

A fork is your personal copy of someone else's repository on GitHub. You can make whatever changes you want without messing up anyone else's work.
At the top of this page is a "fork" button. Click this button to make a personal copy of the obiesource website repository.

## Step 4: Clone the repository locally:

1. Navigate to your forked repository
   - If github doesn't automatically take you there, you can click your avatar in the top right corner > Your repositories > obiesource.github.io
2. Click Code. Click on either HTTPS or SSH, depending on which you chose in [Authenticating with GitHub from Git](https://docs.github.com/en/github-ae@latest/get-started/quickstart/set-up-git#authenticating-with-github-from-git) in step 1. Copy the link.
3. Open a terminal on your computer (e.g. Terminal for Mac; PowerShell or Git Bash for Windows)
4. Navigate to where you want to store the repository locally.

   > If you're not as familiar with the terminal, here are some basic commands you can use to navigate around. (The command line is pretty useful sometimes, but at first it'll probably just feel annoying.)
   >
   > - `pwd` (_**p**rint **w**orking **d**irectory_) prints the full path of the directory (AKA folder) you're currently in.
   > - `ls` (_**l**i**s**t_) lists the files in the current directory.
   > - `cd` (_**c**hange **d**irectory_) moves between directories.
   >   - If you're currently in `/Users/william/Documents/`, you can run `cd code/obiesource` to go to `/Users/william/Documents/code/obiesource/`.
   >     If you start the path with a `/`, it'll be interpreted as an **absolute path** instead of `cd /Users/william/Documents/code/obiesource/`.
   >   - If you're currently in `/Users/william/Documents/code/obiesource/`, run `cd ..` to go to the parent directory, `/Users/william/Documents/code/`.

5. Enter the following command in your terminal. (Don't actually include the curly braces `{}`.)
   ```sh
   git clone {the-link-you-copied}
   ```
6. Make a new branch in git:

   - enter the following commands:

     ```sh
     git switch -c new-member
     ```

     > This is a shorthand for `git switch --create new-member`, which itself is a shorthand for running `git branch new-member` and then `git switch new-member`.

     This command creates a new branch called `new-member` and switches to it. To learn more about git, come to one of our git/GitHub workshops!

     > **Troubleshooting**: If you have an old version of `git` (like Clyde does), you might get an error message that `'switch' is not a git command`. In that case, run `git checkout -b new-member`.

## Step 4: Make changes:

1. Navigate to the folder `obiesource.github.io/src/members`
2. Make a copy of `_template.json`
3. Rename the copy `{your-name}.json`
4. Edit the document with your own personal information using a text editor. (I recommend [Visual Studio Code](https://code.visualstudio.com/).) All fields other than "name" are optional (just delete them to remove them from the page).

## Step 5: Test your changes:

**NOTE**: This is the step that relies on you having Node.js installed from step 2.

1. In your terminal, navigate to the `obiesource.github.io/` directory.
2. Run the following command to install the JavaScript dependencies that this project requires (e.g. React.js):
   ```sh
   npm install
   ```
3. Run the following command to start the development server:
   ```sh
   npm start
   ```
4. In your favorite web browser, navigate to the local URL listed in the output of `npm start` (probably something like <http://localhost:3000> or <http://127.0.0.1:8000/>).

   > **Troubleshooting:**
   >
   > - If there's an error in the terminal,
   > - If the page is blank, you'll probably be able to see the error if you open up your browser's developer console. (Or there might be an error message in the terminal where you're running the server.) It's probably because your JSON syntax isn't quite right. Look out for mistakes in quotation marks and commas in `src/members/{your-name}.json`!
   > - If you forget the "name" field, you'll see an error in the members list page itself.

5. You should see a link that includes your name. Click on it.
6. You should see a page with all your information on it!
   > **Troubleshooting:** If you see an error message, try to fix the error in `src/members/{your-name}.json`.

## Step 6: Push the repository:

1. In your terminal, navigate to `obiesource.github.io/`
2. Run the following commands:
   ```sh
   git status
   # In the output of `git status`, you should see that you're in the branch new-member and
   # that src/members/{your-name}.json has been changed.
   # Let's add that file so we can commit it to the git repository.
   git add src/members/{your-name}.json
   # If you run `git status` again here, you should see that
   # src/members/{your-name}.json is ready to be committed.
   # So let's commit it:
   git commit -m "Adding myself to the members list"
   # Then push it up to the new-member branch in your fork of the website.
   git push
   # At this point, you'll probably get an error message from git.
   # since you don't yet have a branch called new-member in your fork.
   # Let's follow git's suggestion from the error message to confirm that
   # you want to associate this local new-member branch with your fork's new-member branch.
   # (By default, "origin" is the GitHub repository you cloned from. In this case, that's your fork.)
   git push --set-upstream origin new-member
   ```

## Step 7: Make a pull request

A pull request is a request to have the changes from your forked repository added to the origin repository.

1. Open your forked repository in github.
2. Above your files should be a message that says "This branch is 1 commit ahead of ObieSource/obiesource.github.io:main."
   <!-- - If the message says "This branch is X commits _behind_ ObieSource/...:main", click Fetch Upstream > Fetch and Merge -->
   <!-- ^ I don't think this should be necessary. And if there is a merge conflict for some reason, we can help people deal with it once they submit the PR. -->
3. Click Contribute > Open pull request > Create pull request
4. Now just wait! We'll review the additions and either give you feedback or accept the request!

---

## Getting Started with Create React App

> **NOTE**: [Create React App](https://create-react-app.dev/) is the tool we used to create the current version of the website. The rest of this page is the documentation that was added automatically by Create React App.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
