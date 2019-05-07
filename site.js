/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
// 
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//    
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating 
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = new Vue({
      el: '#vue_app',
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data: {
            // This holds your movies.json data.
            movies: [],

            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: "IMDB + Andre's Top 8 Movies",
            owner: 'Andre',
            github: 'https://github.com/ac639/is219-p3'
      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            makeTextDate(dateArray) {
                  var year = dateArray[0];
                  var month = dateArray[1];
                  var day = dateArray[2];

                  if (month == 1) {
                        month = 'January';
                  } else if (month == 2) {
                        month = 'February';
                  } else if (month == 3) {
                        month = 'March';
                  } else if (month == 4) {
                        month = 'April';
                  } else if (month == 5) {
                        month = 'May';
                  } else if (month == 6) {
                        month = 'June';
                  } else if (month == 7) {
                        month = 'July';
                  } else if (month == 8) {
                        month = 'August';
                  } else if (month == 9) {
                        month = 'September';
                  } else if (month == 10) {
                        month = 'October';
                  } else if (month == 11) {
                        month = 'November';
                  } else if (month == 12) {
                        month = 'December';
                  }

                  var dateFormat = '';
                  dateFormat = dateFormat + month + ' ' + day + ', ' + year;

                  return dateFormat;

            },

            like(index) {
                  this.movies[index].likes += 1;

            },
            dislike(index) {
                  this.movies[index].dislikes -= 1;

            },

            posterClick(index) {
                  if ( this.movies[index].posterindex < (this.movies[index].posters.length - 1)  ) {
                        this.movies[index].posterindex += 1;
                  } else {
                        this.movies[index].posterindex = 0;
                  }
            },

            timeText(minutes) {
                  var hours = Math.floor(minutes / 60)
                  var realMin = minutes % 60

                  var hoursMins = '';
                  hoursMins = hours + 'h' + ' ' + realMin + 'm';

                  return hoursMins;



            }

      }
})
	

