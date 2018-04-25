// /**
//  * es6 modules and imports
//  */
// import sayHello from './hello';
// sayHello('World');

/**
 * require style imports
 */
const $ = require('jquery');


const {getMovies, addMovies} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});


const movieDisplayer = require('./displayer.js');



$("#add-movie").click((e)=>{
    event.preventDefault();

    const title = $('#title-movie').val();
    const rating = $('#rating-movie').val();

    const movieRow = movieDisplayer(title, rating);
    // movies.push({title: "", rating:"" });

    $("tbody").append(movieRow);
});



