import { Movie } from '../entities/movie';

export abstract class MoviesRepository {
  abstract findMany(): Promise<Movie[]>;
  abstract create(movie: Movie): Promise<void>;
}
