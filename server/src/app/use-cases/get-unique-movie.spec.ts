import { Movie } from '@app/entities/movie';
import { InMemoryMoviesRepository } from '@app/repositories/in-memory-movies-repository';
import { GetUniqueMovie } from './get-unique-movie';

describe('Get all movies', () => {
  it('should be able to get unique movie by id', async () => {
    const moviesRepository = new InMemoryMoviesRepository();
    const getUniqueMovie = new GetUniqueMovie(moviesRepository);

    const exampleMovie = new Movie(
      {
        title: 'example',
        description: 'example',
      },
      'example-id',
    );

    await moviesRepository.create(exampleMovie);

    const { movie } = await getUniqueMovie.execute({
      movieId: 'example-id',
    });

    expect(movie).not.toBeNull();
  });

  it('should be able to return null if id is not exists', async () => {
    const moviesRepository = new InMemoryMoviesRepository();
    const getUniqueMovie = new GetUniqueMovie(moviesRepository);

    const { movie } = await getUniqueMovie.execute({
      movieId: 'example-id',
    });

    expect(movie).toBeNull();
  });
});
