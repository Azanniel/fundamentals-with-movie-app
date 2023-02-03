import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetMovies } from '@app/use-cases/get-movies';
import { SaveMovie } from '@app/use-cases/save-movie';
import { CreateMovieBody } from '../dtos/create-movie-body';
import { MovieViewModel } from '../view-models/movie-view-model';

@Controller('/movies')
export class MoviesController {
  constructor(private getMovies: GetMovies, private saveMovie: SaveMovie) {}

  @Get('/')
  async getAll() {
    const { movies } = await this.getMovies.execute();

    return { movies: movies.map(MovieViewModel.toSummaryHttp) };
  }

  @Post('/')
  async store(@Body() body: CreateMovieBody) {
    const { title, description } = body;

    const { movie } = await this.saveMovie.execute({
      title,
      description,
    });

    return { movie: MovieViewModel.toHttp(movie) };
  }
}
