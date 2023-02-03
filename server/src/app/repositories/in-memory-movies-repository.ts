import { Movie } from '@app/entities/movie';
import { MoviesRepository } from './movies-repository';

export class InMemoryMoviesRepository implements MoviesRepository {
  public movies: Movie[] = [];

  async findMany(): Promise<Movie[]> {
    return this.movies;
  }

  async findById(movieId: string): Promise<Movie | null> {
    const movie = this.movies.find((item) => item.id === movieId);

    if (!movie) {
      return null;
    }

    return movie;
  }

  async create(movie: Movie): Promise<void> {
    this.movies.push(movie);
  }
}
