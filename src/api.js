module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    },
    addMovies: (newMovies) => {
        const theMovies = '/api/movies';
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newMovies)
        };

        return fetch(theMovies, options)
            .then(response => response.json());
    },
    deleteMovies: (id) => {
        const theMovies =`/api/movies/${id}`;
        const options = {
            method: 'DELETE',
        };
        return fetch(theMovies, options)
            .then(response => response.json());
    },

    editMovies: (movie) => {
        const theMovies = `/api/movies/${movie.id}`;
        const options = {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {'Content-Type': 'application/json'}
        };
        console.log(movie.id);
        return fetch(theMovies, options)
            .then(response => response.json());

    }

};




