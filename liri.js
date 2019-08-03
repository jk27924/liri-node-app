require("dotenv").config();

var keys = require("./keys.js");

var axios = require("axios");

var bandsintown = require("bandsintown")("106ad69002bde46c02cdebb861ad5e84");
var moment = require("moment");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var OmdbApi = require("omdb-api-pt")

var fs = require("fs");



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


// #1 concert-this _ Bands in Town
function getConcert () {
    var artist = actionTwo;
    var bandsQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(bandsQueryUrl).then(function(response) {
        console.log (
            "\n----------------------------------------------" + 
            "\nArtist: " + artist + 
            "\nVenue: " + response.data[0].venue.name + 
            "\nLocation: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country + 
            "\nDate: " + moment(response.data[0].datetime).format("MM/DD/YYYY") +
            "\n----------------------------------------------"
        );

        var currentMoment = moment().format("MMMM Do YYYY, h:mm:ss a");

        var logText =
        "\n--------------------------------------------------------" + 
        "\nYOUR REQUESTED |CONCERT| INFORMATION! ENJOY ^_^" +
        "\n<<-- Search Request on: " + currentMoment + " -->>" +          
        "\nArtist: " + artist + 
        "\nVenue: " + response.data[0].venue.name + 
        "\nLocation: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country + 
        "\nDate: " + moment(response.data[0].datetime).format("MM/DD/YYYY") +
        "\n--------------------------------------------------------";

        fs.appendFile("log.txt", logText, function (){});
    })
}


// #2 spotify-this-song _ Spotify
function getSong () {
    var song = actionTwo;

    if (!song) {
        song = "I Saw the Sign";
        // How to make this by Ace of Base?
    }

    spotify.search({ type: 'track', query: song }).then(function(response) {
        console.log (
            "\n----------------------------------------------" + 
            "\nArtist(s): " + response.tracks.items[0].album.artists[0].name +
            "\nSong: " + response.tracks.items[0].name +
            "\nSpotify Link: " + response.tracks.items[0].external_urls.spotify +
            "\nAlbum: " + response.tracks.items[0].album.name +
            "\n----------------------------------------------"
        );

        var currentMoment = moment().format("MMMM Do YYYY, h:mm:ss a");

        var logText =
        "\n--------------------------------------------------------" + 
        "\nYOUR REQUESTED |SONG| INFORMATION! ENJOY ^_^" + 
        "\n<<-- Search Request on: " + currentMoment + " -->>" +               "\nArtist(s): " + response.tracks.items[0].album.artists[0].name +
        "\nSong: " + response.tracks.items[0].name +
        "\nSpotify Link: " + response.tracks.items[0].external_urls.spotify +
        "\nAlbum: " + response.tracks.items[0].album.name +
        "\n--------------------------------------------------------"

        fs.appendFile("log.txt", logText, function (){});
    });
}


// #3 movie-this _ OMDB
function getMovie () {
    var movie = actionTwo;
    var omdbQueryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"

    if (!movie) {
        movie = "Mr. Nobody";
        // Not Working. Need to work on more.
    }

    axios.get(omdbQueryUrl).then(function(response) {
        console.log(
            "\n----------------------------------------------" + 
            "\nTitle: " + movie + 
            "\nYear: " + response.data.Year + 
            "\nIMDB Rating: " + response.data.imdbRating + 
            "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + 
            "\nCountry Produced: " + response.data.Country + 
            "\nLanguage: " + response.data.Language + 
            "\nPlot: " + response.data.Plot + 
            "\nActors: " + response.data.Actors + 
            "\n----------------------------------------------"
        );

        var currentMoment = moment().format("MMMM Do YYYY, h:mm:ss a");

        var logText =
        "\n--------------------------------------------------------" + 
        "\nYOUR REQUESTED |MOVIE| INFO! ENJOY ^_^" +            
        "\n<<-- Search Request on: " + currentMoment + " -->>" +          
        "\nTitle: " + movie + 
        "\nYear: " + response.data.Year + 
        "\nIMDB Rating: " + response.data.imdbRating + 
        "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + 
        "\nCountry Produced: " + response.data.Country + 
        "\nLanguage: " + response.data.Language + 
        "\nPlot: " + response.data.Plot + 
        "\nActors: " + response.data.Actors + 
        "\n--------------------------------------------------------"

        fs.appendFile("log.txt", logText, function (){});
    });
}


// #4 do-what-it-says _ random.txt
function doWhatItSays () {
    fs.readFile("random.txt", "utf-8", function(error,data) {

        if (error) {
            return console.log(error);
        } else { 
            var output = data.split(", ");
            console.log(output);
        }
    });
}
