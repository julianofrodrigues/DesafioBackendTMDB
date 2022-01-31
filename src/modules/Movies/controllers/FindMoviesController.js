const findMoviesService = require('../services/FindMoviesService');

class FindMoviesController {
  async index(request, response) {
    const { search } = request.query;
    try {
      const favoriteMovies = await findMoviesService.index(search);
      return response.status(200).json(favoriteMovies);
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }
  }
}

module.exports = new FindMoviesController();
