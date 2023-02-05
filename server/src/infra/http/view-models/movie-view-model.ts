import { Movie } from '@app/entities/movie';

export class MovieViewModel {
  static toSummaryHttp(movie: Movie) {
    return {
      id: movie.id,
      title: movie.title,
      cover: movie.coverImage,
    };
  }

  static toHttp(movie: Movie) {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      cover: movie.coverImage,
    };
  }
}
