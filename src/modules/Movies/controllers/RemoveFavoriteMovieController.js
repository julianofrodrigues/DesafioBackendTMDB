const removeFavoriteMovieService = require('../services/RemoveFavoriteMovieService');

class RemoveFavoriteMovieController {
  async index(request, response) {
    const { id } = request.params;
    try {
      await removeFavoriteMovieService.index(id);
      return response.status(204).send('destroyed');
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }
  }
}

module.exports = new RemoveFavoriteMovieController();
