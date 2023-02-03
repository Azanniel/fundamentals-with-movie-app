import { Movie } from '@app/entities/movie';

export abstract class MoviesRepository {
  abstract findMany(): Promise<Movie[]>;
  abstract create(movie: Movie): Promise<void>;
}
