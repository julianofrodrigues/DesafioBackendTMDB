const Favorite = require('../../../models/Favorite');

class RemoveFavoriteMovieController {
  async index(id) {
    await Favorite.destroy({
      where: {
        movie_id: id,
      },
    });
  }
}

module.exports = new RemoveFavoriteMovieController();
