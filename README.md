# Rick and Morty App

This application was for a technical challenge and makes use of the public API of Rick & Morty: https://rickandmortyapi.com.

- Front end is built in React with Redux and Hooks.
- Back end is built in Express and is a REST API with MongoDB Database.
- MongoDB url is provided separately.

## Objectives

The main functionalities were required:

- Login
The users need to be authenticated to consume the application. The auth must keep state between reloads. User information for login is stored in db.
- List view
Main page is a list view of all characters with an indicator to know if a character is in the fav list.
- Detail view
When character is clicked, the user will be taken to a detailed view page. A button is available to add or remove a character from a favourite list. Favourites information is stored in db.
- 404 page

These bonus functionalities were added:

- Register
Sign up page was added within Auth component for new users.
- Testing
TODO
- Backend pagination
TODO
- Image preloader
TODO
- Add linter
TODO

Further work to be done with more time:
- Deploy to cloud provider
- Episode details
- User profile and having the favourites list unique to each user

## Running the app locally
- Run `git clone https://github.com/cmcmanus8/rick-morty-app.git`

### Back end
- Create `.env` file in `server` directory with `secret` and `CONNECTION_URL` variables. These are provided separately.
- Open new terminal and navigate to `server`.
- Run `yarn start` to run app in development mode.
- You should see a message in console log saying `Server running on port: 5000` if successful.

### Front end
- Navigate to `src` directory in terminal, run `yarn start` to run app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
