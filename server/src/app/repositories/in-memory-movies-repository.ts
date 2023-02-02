import { Movie } from '../entities/movie';
import { MoviesRepository } from './movies-repository';

export class InMemoryMoviesRepository implements MoviesRepository {
  findMany(): Promise<Movie[]> {
    throw new Error('Method not implemented.');
  }
  create(movie: Movie): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
