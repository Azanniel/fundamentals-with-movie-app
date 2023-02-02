import { Injectable } from '@nestjs/common';
import { MoviesRepository } from '../repositories/movies-repository';

@Injectable()
export class GetMovies {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute() {
    const movies = await this.moviesRepository.findMany();

    return { movies };
  }
}
