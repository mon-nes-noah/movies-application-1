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
    movies.forEach(({title, rating, genre, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);
        document.querySelector('.additionalMovie').innerHTML +=
            `<h3> ${title} <br> Rating: ${rating}<br> Genre: ${genre} <br> <button data-id="${id}" class="deletebutton">Delete</button><button class="editbutton" data-id="${id}">Edit</button></h3> `;
        $('.container').toggleClass("container");
        $('.loadimg').hide();
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});

  //   getMovies().then((movies) => {
  //       console.log('Here are all the movies:');
  //       movies.forEach(({title, rating, id}) => {
  //           console.log(`id#${id} - ${title} - rating: ${rating}`);
  //           document.querySelector('.additionalMovie').innerHTML +=
  //               `<div class='col-sm border border-dark rounded'><h3>${title}</h3><p class="card-text"> Rating: ${rating}</p><button data-id="${id}" class="deletebutton">Delete</button><button class="editbutton" data-id="${id}">Edit</button></div>`;
  // <!--<img class="card-img-top" src="..." alt="Card image cap">-->
  //           $('.container').toggleClass("container");
  //           $('.loadimg').hide();
  //       });
  //   }).catch((error) => {
  //       alert('Oh no! Something went wrong.\nCheck the console for details.')
  //       console.log(error);
  //   });

// ============ FUNCTION TO ADD MOVIES ==========================

$('#add-movie').click((e) => {
    e.preventDefault();
    console.log('test');
    const title = $('#title-movie').val();
    const rating = $('#rating-movie').val();
    const genre = $('#genre-movie').val();
    // location.reload();

    addMovies({title, rating, genre}).then(movie => {
        const movieRow = movieDisplayer(movie.title, movie.rating,movie.genre, movie.id);
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
    const genre = prompt("What genre is the movie?")
    const rating = prompt("Ingresa tu nuevo rating");

    editMovies({id: id, title: title, rating: rating, genre: genre}).then(movie => {
        // addMovies();
        const edit = editMovie(movie.title, movie.rating, movie.genre, movie.id);
        $(e.target).parent('h3').replaceWith(edit);
    });

    console.log('test')
});



