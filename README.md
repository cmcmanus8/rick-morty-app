![alt text](https://github.com/cmcmanus8/rick-morty-app/blob/main/src/images/screenshot.png?raw=true)

# Rick and Morty App

This application was for a technical challenge and makes use of the public API of Rick & Morty: https://rickandmortyapi.com.

- Front end is built in React with Redux and Hooks.
- Back end is built in Express and is a REST API with MongoDB Database.
- MongoDB url is provided separately.

## Objectives

### The main functionalities were required:

- Login\
The users need to be authenticated to consume the application. The auth is kept state between reloads in local storage. User information for login is stored in db.
- List view\
Main page is a list view of all characters with an indicator to know if a character is in the fav list.
- Detail view\
When character is clicked, the user will be taken to a detailed view page. A button is available to add or remove a character from a favourite list. Favourites information is stored in db.
- 404 page

### These bonus functionalities were also specified:

- Register\
Sign up page was added within Auth component for new users.
- Testing\
Further work.
- Backend pagination\
Load more button added to send request to back end to fetch next page of characters and load into same page scrolling.
- Image preloader\
Further work.
- Take a beer\
Done!

### Further work to be done with more time:
- Testing! Write unit, integration and e2e tests to check components, functionality for user flow `(Login/Register -> View Character List -> View Details -> Favourite/Unfavourite)`
- Deploy to cloud provider
- Episode details to populate `First seen in:` name.
- User profile and having the favourites list unique to each user
- Prettier pagination

## Running the app locally
- Run `git clone https://github.com/cmcmanus8/rick-morty-app.git`

### Back end
- Create `.env` file in `server` directory with `secret` and `CONNECTION_URL` variables. These are provided separately.
- Open terminal and navigate to `server`.
- Run `yarn start` to run app in development mode.
- You should see a message in console log saying `Server running on port: 5000` if successful.

### Front end
- Open new terminal and navigate to `src` directory, run `yarn start` to run app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Extra libraries

### Back end
- axios - to make http requests
- bcryptjs - to hash password
- jsonwebtoken - for authentication
- mongoose - MongoDB client

### Front end
- react-router-dom - React navigation
- redux-thunk - React redux middleware for async anctions
- react-google-login - for google auth
