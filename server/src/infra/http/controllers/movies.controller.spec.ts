import { GetMovies } from '@app/use-cases/get-movies';
import { DatabaseModule } from '@infra/database/database.module';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';

describe('Movies Controller', () => {
  let movieController: MoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [MoviesController],
      providers: [GetMovies],
    }).compile();

    movieController = module.get<MoviesController>(MoviesController);
  });

  it('should be able to list movies', async () => {
    const response = await movieController.getAll();

    expect(response).toBeTruthy();
  });
});
