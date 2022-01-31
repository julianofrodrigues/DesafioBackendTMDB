const axios = require('axios');
const HandleMovie = require('../../../utils/HandleMovie');
const Url = require('../../../utils/Url');

class GetTopRatedMoviesService {
  async index() {
    const url = Url.getApiAddress('movie/top_rated');
    const { data } = await axios.get(url);
    const movies = HandleMovie.getMoviesImage(data.results);
    return movies;
  }
}

module.exports = new GetTopRatedMoviesService();
