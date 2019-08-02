require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var moment = require("moment");
var axios = require("axios");

var fs = require('fs');
var OmdbApi = require('omdb-api-pt')
var bandsintown = require('bandsintown')("106ad69002bde46c02cdebb861ad5e84");

var action = process.argv [2];
var actionTwo = process.argv.slice(3).join(" ");

// function switchAction() {
    switch (action) {
        case "concert-this":
        getConcert();
        break;

        case "spotify-this-song":
        getSong();
        break;

        case "movie-this":
        getMovie();
        break;

        case "do-what-it-says":
        doWhatItSays();
        break;
    }
// }


// #1 Bands in Town
function getConcert () {
    var artist = actionTwo;
    var bandsQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"



    axios.get(bandsQueryUrl).then(function(response) {
        console.log (
            "Artist: " + artist + "\nVenue: " + response.data[0].venue.name + "\nLocation: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country + "\nDate: " + moment(response.data[0].datetime).format("MM/DD/YYYY")
        );
    })

// * Name of the venue
// * Venue location
// * Date of the Event (use moment to format this as "MM/DD/YYYY")

}






// #2 Spotify


// #3 OMDB


// #4 Do What It Says






