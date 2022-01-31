const Favorite = require('../../../models/Favorite');

class GetFavoriteMoviesIdService {
  async index() {
    const favorites = await Favorite.findAll();
    return favorites;
  }
}

module.exports = new GetFavoriteMoviesIdService();
