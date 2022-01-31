const getTrendingsService = require('../services/GetTrendingsService');

class GetTrendingsController {
  async index(request, response) {
    try {
      const trendingMovies = await getTrendingsService.index();
      return response.status(200).json(trendingMovies);
    } catch (err) {
      return response.status(400).json({ exception: err.message });
    }
  }
}

module.exports = new GetTrendingsController();
