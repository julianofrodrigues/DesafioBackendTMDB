const axios = require('axios');
const HandleMovie = require('../../../utils/HandleMovie');
const Url = require('../../../utils/Url');

class GetTrendingsService {
  async index() {
    const url = Url.getApiAddress('trending/movie/week');
    const { data } = await axios.get(url);
    const movies = HandleMovie.getMoviesImage(data.results);
    return movies;
  }
}

module.exports = new GetTrendingsService();
