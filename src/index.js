// /**
//  * es6 modules and imports
//  */
// import sayHello from './hello';
// sayHello('World');

/**
 * require style imports
 */



const {getMovies, addMovies, deleteMovies, editMovies} = require('./api.js');
const $ = require('jquery');
const movieDisplayer = require('./displayer.js');
const editMovie = require('./editmovie.js');

getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);
        document.querySelector('.additionalMovie').innerHTML +=
            `<h3> ${title} <br> Rating: ${rating}<br><button data-id="${id}" class="deletebutton">Delete</button><button class="editbutton" data-id="${id}">Edit</button></h3> `;
        $('.container').toggleClass("container");
        $('.loadimg').hide();
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});


// ============ FUNCTION TO ADD MOVIES ==========================

$('#add-movie').click((e) => {
    e.preventDefault();
    console.log('test');
    const title = $('#title-movie').val();
    const rating = $('#rating-movie').val();
    // location.reload();

    addMovies({title, rating}).then(movie => {
        const movieRow = movieDisplayer(movie.title, movie.rating, movie.id);
        $(".additionalMovie").append(movieRow)
    });

});


// ============== FUNCTION TO DELETE MOVIES ====================

$('.additionalMovie').on('click', '.deletebutton', (e)=>{
    e.preventDefault();
    console.log($(e.target).data('id'));
    $(e.target).parent('h3').remove();
    deleteMovies($(e.target).data('id'));


});

// $('#edit-movie').click((e) => {
//     e.preventDefault();
//
//     console.log('test')
// });
//
//
// $('.additionalMovie').on('click', '.editbutton', (e) =>{
//     console.log('hello');
//     e.preventDefault();
//     // const movie = editMovie(title, rating);
//     const id = $(e.target).data('id');
//     const title = $('#title-movie').val();
//     const rating = $('#rating-movie').val();
//
//     editMovies({id: id, title: title, rating: rating});
//
//     const edit = editMovie(title, rating);
//     $(e.target).parent('#display').replaceWith(edit);
// });


// ================= FUNCTION TO EDIT MOVIES ===================


$('.additionalMovie').on('click', '.editbutton', e => {
    e.preventDefault();
    const id = $(e.target).data('id');
    const title = prompt("Ingresa tu edicion");
    const rating = prompt("Ingresa tu nuevo rating");

    editMovies({id: id, title: title, rating: rating}).then(movie => {
        // addMovies();
        const edit = editMovie(movie.title, movie.rating, movie.id);
        $(e.target).parent('h3').replaceWith(edit);
    });

    console.log('test')
});



