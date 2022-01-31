const getMovieDetailsService = require('../services/GetMovieDetailsService');

class GetMovieDetailsController {
  async index(request, response) {
    const { id } = request.params;
    try {
      const movieDetails = await getMovieDetailsService.index(id);
      return response.status(200).json(movieDetails);
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }
  }
}

module.exports = new GetMovieDetailsController();
