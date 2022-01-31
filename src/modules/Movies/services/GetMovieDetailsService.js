const axios = require('axios');
const HandleMovie = require('../../../utils/HandleMovie');
const Url = require('../../../utils/Url');

class GetMovieDetailsService {
  async index(id) {
    const url = Url.getApiAddress(`/movie/${id}`);
    const { data } = await axios.get(url);
    const movie = HandleMovie.getMoviesImage(data, true);
    return movie;
  }
}

module.exports = new GetMovieDetailsService();
