import { Movie } from '@app/entities/movie';
import { MoviesRepository } from '@app/repositories/movies-repository';
import { Injectable } from '@nestjs/common';

interface GetMoviesResponse {
  movies: Movie[];
}

@Injectable()
export class GetMovies {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(): Promise<GetMoviesResponse> {
    const movies = await this.moviesRepository.findMany();

    return { movies };
  }
}
