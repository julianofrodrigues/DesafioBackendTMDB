const axios = require('axios');
const HandleMovie = require('../../../utils/HandleMovie');
const Url = require('../../../utils/Url');

class FindMoviesService {
  async index(query) {
    const response = await axios.get(Url.getApiAddress('search/movie', `query=${query}`));
    if (response) {
      const movies = HandleMovie.getMoviesImage(response.data.results);
      return movies;
    }
    return [];
  }
}

module.exports = new FindMoviesService();
