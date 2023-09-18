#### NetflixGPT

### Setup the project

Go inside the folder path and execute the following command:

```
npm install
```

In the root directory create a `.env `file and add the TMDB and OPENAI KEY into it.
ex:

```
    REACT_APP_OPENAI_KEY=sk-asdKIaR234w6sdf6qs3sdffdfsasd234wdfEaafq3re234casd

    REACT_APP_TMDB_API_KEY=eyJhbGciOiJIUsdvsa4.eyJhdWQiOiI1ODA0MjM5OWMsdfabvsInN1YiI6IjY1MDQ2MDc0ZGI0ZWQ2MTAzNjQwYWMzNSIsIasfvacmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5igOnTktDvXLZDPKIkIsdvsadvafv
```

To run the server execute

```
npm run dev
```

- Create React App.
- Configured TailwindCSS.
- Header.
- Routing of App.
- Login Form.
- Sign up form.
- Form Validation.
- useRef Hook.
- Firebase Setup.
- Deployed our app to production.
- Create SignUp user account.
- Implement Sign In user API.
- Created Redux Store with userSlice.
- Implemented Sign out.
- Update Profile
- BugFix: Signup user display and profile picture update
- BugFix: If the user is not logged in redirect /browse to login page and vice versa
- UnSubscribed to the on onAuthStateChanged callback
- Add hardcoded values to the constant file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Container.
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- Get Open AI Api Key
- (BONUS) Multi-language Feature in our App
- GPT Search Page
- GPT Search Bar
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore

# Features

- Login/Sign Up

  - Sign In /Sign up Form
  - redirect to Browse Page

- Browse Page (after authentication)

  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N

- NetflixGPT
  - Search Bar
  - Movie Suggestions
