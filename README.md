# LIRI Bot (Language Interpretation and Recognition Interface)

## Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Switch Cases and Commands
Switching cases to run the appropriate function based on the user's command:
- concert-this
- spotify-this-song
- movie-this
- do-what-it-says

## Used APIs
- Bands In Town (http://www.artists.bandsintown.com/bandsintown-api)
- Spotify (https://developer.spotify.com/)
- OMDB (http://www.omdbapi.com)

## NPM Packages
- Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)
- Axios (https://www.npmjs.com/package/axios)
- Moment (https://www.npmjs.com/package/moment)
- DotEnv (https://www.npmjs.com/package/dotenv)

## What Each Command Does
**1. node liri.js concert-this 'artist/band name here':**
Searches the Bands in Town Artist Events API for an artist and renders the following information about each event to the terminal.

- Name of the Artist
- Name of the Venue
- Venue location
- Date of the Event (using the format "MM/DD/YYYY")

**2. node liri.js spotify-this-song 'song name here':**
  Searches through Spotify for the song name user input and renders the following information about each event to the terminal.

- Artist(s)
- The Song's name
- A preview link of the song from Spotify
- The album containing the song

(*If no song is provided, the program outputs default data for the song "The Sign" by Ace of Base.*)

**3. node liri.js movie-this 'movie name here':**
Searches through the OMDB API for a movie and renders the following information about each event to the terminal.

- Title
- Year movie was released
- IMDB Rating
- Rotten Tomatoes Rating
- Country where movie was produced
- Language(s)
- Plot of the movie
- Actors in the movie

(*If no movie is provided, the program outputs data for the movie "Mr. Nobody."*)

**4. node liri.js do-what-it-says:**  Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

1) It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
2) User can also Edit the text in random.txt to test out the feature for movie-this and concert-this as well.

## Saving Search History
In addition to logging the data to the terminal/bash window, output the data to a txt file called **log.txt**.

## Demonstration Video
To see a YouTube video demonstrating how Liri works, just click on the following link:
- https://youtu.be/gEMQn_u_C6c
