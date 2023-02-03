import { Movie } from '@app/entities/movie';

export abstract class MoviesRepository {
  abstract findMany(): Promise<Movie[]>;
  abstract findById(movieId: string): Promise<Movie | null>;
  abstract create(movie: Movie): Promise<void>;
}
