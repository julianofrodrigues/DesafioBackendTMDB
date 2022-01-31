const addFavoriteMovieService = require('../services/AddFavoriteMovieService');

class AddFavoriteMovieController {
  async index(request, response) {
    const { id } = request.body;
    try {
      await addFavoriteMovieService.index(id);
      return response.status(201).send('created');
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }
  }
}

module.exports = new AddFavoriteMovieController();
