module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
    addMovies: () => {
        //return fetch('./api/movies')
        const theMovies = '/api/movies';
        const options = {
            method: 'POST',
            body: JSON.stringify(movies),
        };
        fetch(theMovies, options)
            .then(/* movie was created successfully */)
            .catch(/* handle errors */);
    }
};

