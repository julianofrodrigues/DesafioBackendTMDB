const Favorite = require('../../../models/Favorite');

class AddFavoriteMovieService {
  async index(id) {
    await Favorite.create({
      movie_id: id,
    });
  }
}

module.exports = new AddFavoriteMovieService();
