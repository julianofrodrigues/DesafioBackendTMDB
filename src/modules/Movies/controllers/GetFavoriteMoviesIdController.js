const getFavoriteMoviesIdService = require('../services/GetFavoriteMoviesIdService');

class GetFavoriteMoviesIdController {
  async index(request, response) {
    try {
      const favoriteMovies = await getFavoriteMoviesIdService.index();
      return response.status(200).json(favoriteMovies);
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }
  }
}

module.exports = new GetFavoriteMoviesIdController();
