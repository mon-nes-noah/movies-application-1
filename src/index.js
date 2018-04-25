// /**
//  * es6 modules and imports
//  */
// import sayHello from './hello';
// sayHello('World');

/**
 * require style imports
 */
const {getMovies, addMovies} = require('./api.js');
const $ = require('jquery');
const movieDisplayer = require('./displayer.js')

getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);
        document.querySelector('.additionalMovie').innerHTML += `<h1> ${title} - rating: ${rating} <button class="deletebutton">Delete</button></h1>`;
        $('.container').toggleClass("container");
        $('.loadimg').hide();
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});


$('#add-movie').click((e) => {
    e.preventDefault();
    console.log('test');
    const title = $('#title-movie').val();
    const rating = $('#rating-movie').val();

    addMovies({title, rating});

    const movieRow = movieDisplayer(title, rating);
    $("tbody").append(movieRow)

});

$('.deletebutton').click((e)=>{
    e.preventDefault();
})



