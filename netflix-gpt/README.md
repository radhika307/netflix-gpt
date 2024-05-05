# Netflix GPT

- Create react app
- Configured tailwind css
- Header
- Routing
- Login form
- Sign up form
- Form validation
- useRef hook
- Firebase for authentication and hosting
- Firebase setup
- Deploying app to production (https://netflixgpt-a6adf.web.app)
- Create signup user account in firebase
- Implement sign in user api
- Created redux store with userSlice
- Implemented sign out
- Update profile
- Bug fix: sign up user displayname and profile picture update
- Bug fix: If the user is not logged in redirect /browse to login page and vice versa
- Unsubscribed to onAuthStateChanged callback
- Add hard code values to constant file
- Register for TMDB API and create an account to get access token
- Get data from the movies DB(TMDB) now playing movies
- Custom hook for now playing movies
- Create a movie slice
- Planning for main container and secondary container
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the youtube video and made it autoplay and mute
- Added tailwind classes

# Features:

- Login/signup page
  - signIn form
  - Redirect to browse page
- Browse page (after authentication)
  - Header
  - Main movie
    - Trailor in background
    - Title and description
    - Movie suggestions
      - Movie list \* n
- NetflixGPT
  - Search bar
  - Movie suggestions

TO-DO:

- build a dropdown menu for sign out
- create an error page
