const { Router } = require('express');
const GetMovieDetailsController = require('../modules/Movies/controllers/GetMovieDetailsController');
const GetTopRatedMoviesController = require('../modules/Movies/controllers/GetTopRatedMoviesController');
const GetTrendingsController = require('../modules/Movies/controllers/GetTrendingsController');
const AddFavoriteMovieController = require('../modules/Movies/controllers/AddFavoriteMovieController');
const GetFavoriteMoviesIdController = require('../modules/Movies/controllers/GetFavoriteMoviesIdController');
const FindMoviesController = require('../modules/Movies/controllers/FindMoviesController');
const RemoveFavoriteMovieController = require('../modules/Movies/controllers/RemoveFavoriteMovieController');
const GetFavoriteMoviesController = require('../modules/Movies/controllers/GetFavoriteMoviesController');

const moviesRoutes = Router();
moviesRoutes.post('/movies/favoriteMovies', AddFavoriteMovieController.index);
moviesRoutes.get('/movies/findMovie', FindMoviesController.index);
moviesRoutes.get('/movies/favoriteMoviesId', GetFavoriteMoviesIdController.index);
moviesRoutes.get('/movies/favoriteMovies', GetFavoriteMoviesController.index);
moviesRoutes.get('/movies/getTrendings', GetTrendingsController.index);
moviesRoutes.get('/movies/getTopRatedMovies', GetTopRatedMoviesController.index);
moviesRoutes.get('/movies/getDetails/:id', GetMovieDetailsController.index);

moviesRoutes.delete('/movies/favoriteMovies/:id', RemoveFavoriteMovieController.index);
module.exports = moviesRoutes;
