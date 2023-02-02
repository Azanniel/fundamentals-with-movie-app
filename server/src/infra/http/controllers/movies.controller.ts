import { Controller, Get } from '@nestjs/common';
import { GetMovies } from '../../../app/use-cases/get-movies';

@Controller('/movies')
export class MoviesController {
  constructor(private getMovies: GetMovies) {}

  @Get('/')
  async getAll() {
    return {};
  }
}
