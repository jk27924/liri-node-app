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
function switchAction() {
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
}

var sliceJoin = process.argv.slice(3).join(" ");



// if (action === "concert-this") {
//     var band = process.argv.slice(3).join(" ");
//     axios.get ("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(function(result) {
//         console.log(result); 
//     })
// } 
