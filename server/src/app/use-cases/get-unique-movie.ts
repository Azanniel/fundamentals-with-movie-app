import { Movie } from '@app/entities/movie';
import { MoviesRepository } from '@app/repositories/movies-repository';
import { Injectable } from '@nestjs/common';

interface GetUniqueMovieRequest {
  movieId: string;
}

interface GetUniqueMovieResponse {
  movie: Movie | null;
}

@Injectable()
export class GetUniqueMovie {
  constructor(private movieRepository: MoviesRepository) {}

  async execute(
    request: GetUniqueMovieRequest,
  ): Promise<GetUniqueMovieResponse> {
    const { movieId } = request;

    const movie = await this.movieRepository.findById(movieId);

    return { movie };
  }
}
