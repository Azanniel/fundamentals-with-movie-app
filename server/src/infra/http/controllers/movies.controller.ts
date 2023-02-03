import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetMovies } from '@app/use-cases/get-movies';
import { SaveMovie } from '@app/use-cases/save-movie';
import { CreateMovieBody } from '../dtos/create-movie-body';
import { MovieViewModel } from '../view-models/movie-view-model';
import { GetUniqueMovie } from '@app/use-cases/get-unique-movie';

@Controller('/movies')
export class MoviesController {
  constructor(
    private getMovies: GetMovies,
    private getUniqueMovie: GetUniqueMovie,
    private saveMovie: SaveMovie,
  ) {}

  @Get('/')
  async getAll() {
    const { movies } = await this.getMovies.execute();

    return { movies: movies.map(MovieViewModel.toSummaryHttp) };
  }

  @Get(':movieId')
  async getUnique(@Param('movieId') movieId: string) {
    const { movie } = await this.getUniqueMovie.execute({
      movieId,
    });

    return { movie: MovieViewModel.toHttp(movie) };
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
