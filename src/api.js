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
    }
}


