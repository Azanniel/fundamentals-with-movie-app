import { Injectable } from '@nestjs/common';
import { Movie } from '../entities/movie';
import { MoviesRepository } from '../repositories/movies-repository';

interface SaveMovieRequest {
  title: string;
  description: string;
}

interface SaveMovieResponse {
  movie: Movie;
}

@Injectable()
export class SaveMovie {
  constructor(private movieRepository: MoviesRepository) {}

  async execute(request: SaveMovieRequest): Promise<SaveMovieResponse> {
    const { title, description } = request;

    const movie = new Movie({
      title,
      description,
    });

    await this.movieRepository.create(movie);

    return { movie };
  }
}
