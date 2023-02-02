import { Injectable } from '@nestjs/common';
import { Movie } from '../entities/movie';
import { MoviesRepository } from '../repositories/movies-repository';

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
