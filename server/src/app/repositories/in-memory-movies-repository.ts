import { Movie } from '@app/entities/movie';
import { MoviesRepository } from './movies-repository';

export class InMemoryMoviesRepository implements MoviesRepository {
  public movies: Movie[] = [];

  async findMany(): Promise<Movie[]> {
    return this.movies;
  }

  async create(movie: Movie): Promise<void> {
    this.movies.push(movie);
  }
}
