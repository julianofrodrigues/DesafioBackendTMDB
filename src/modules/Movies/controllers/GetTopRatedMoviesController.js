const getTopRatedMoviesService = require('../services/GetTopRatedMoviesService');

class GetTopRatedMoviesController {
  async index(request, response) {
    try {
      const topRatedMovies = await getTopRatedMoviesService.index();
      return response.status(200).json(topRatedMovies);
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }
  }
}

module.exports = new GetTopRatedMoviesController();
