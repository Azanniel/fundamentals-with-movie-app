import { Movie } from '@app/entities/movie';
import { MoviesRepository } from '@app/repositories/movies-repository';
import { Injectable } from '@nestjs/common';

interface SaveMovieRequest {
  title: string;
  description: string;
  coverImage: string;
}

interface SaveMovieResponse {
  movie: Movie;
}

@Injectable()
export class SaveMovie {
  constructor(private movieRepository: MoviesRepository) {}

  async execute(request: SaveMovieRequest): Promise<SaveMovieResponse> {
    const { title, description, coverImage } = request;

    const movie = new Movie({
      title,
      description,
      coverImage,
    });

    await this.movieRepository.create(movie);

    return { movie };
  }
}
