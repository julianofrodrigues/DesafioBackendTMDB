const Favorite = require('../../../models/Favorite');
const getMovieDetailsService = require('./GetMovieDetailsService');

class GetFavoriteMoviesIdService {
  async index() {
    const favorites = await Favorite.findAll();
    const favoriteMovies = [];
    if(favorites) {
      for (let i = 0; i < favorites.length; i++) {
        const movies = await getMovieDetailsService.index(favorites[i].movie_id);
        favoriteMovies.push(movies);
      }
    }
    return favoriteMovies;
  }
}

module.exports = new GetFavoriteMoviesIdService();
