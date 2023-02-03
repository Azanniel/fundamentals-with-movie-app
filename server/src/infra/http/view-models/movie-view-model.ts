import { Movie } from '@app/entities/movie';

export class MovieViewModel {
  static toHttp(movie: Movie) {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.description,
    };
  }
}
