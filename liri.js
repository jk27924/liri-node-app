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
}

// #2 Spotify
function getSong () {
    var song = actionTwo;

    spotify.search({ type: 'track', query: song }).then(function(response) {
        console.log (
            "\n----------------------------------------------" + 
            "\nArtist(s): " + response.tracks.items[0].album.artists[0].name +
            "\nSong: " + response.tracks.items[0].name +
            "\nSpotify Link: " + response.tracks.items[0].external_urls.spotify +
            "\nAlbum: " + response.tracks.items[0].album.name +
            "\n----------------------------------------------"
        );
    });
}

// #3 OMDB
function getMovie () {
    var movie = actionTwo;
    var omdbQueryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"

    axios.get(omdbQueryUrl).then(function(response) {
        console.log(
            "Title: " + movie + "\nYear: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry Produced: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors
        );
    });
}

// #4 Do What It Says
function doWhatItSays () {
    fs.readFile("random.txt", "utf-8", function(error,data) {

        if (error) {
            return console.log(red(error));
        } else {
            var output = data.split(", ");
            getSong(txt[1]);
            console.log(output);
        }
    });
}
