const getFavoriteMoviesService = require('../services/GetFavoriteMoviesService');

class GetFavoriteMoviesController {
  async index(request, response) {
    try {
      const favoriteMovies = await getFavoriteMoviesService.index();
      return response.status(200).json(favoriteMovies);
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }
  }
}

module.exports = new GetFavoriteMoviesController();
