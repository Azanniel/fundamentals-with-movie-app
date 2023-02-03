import { GetMovies } from '@app/use-cases/get-movies';
import { Controller, Get } from '@nestjs/common';

@Controller('/movies')
export class MoviesController {
  constructor(private getMovies: GetMovies) {}

  @Get('/')
  async getAll() {
    return {};
  }
}
