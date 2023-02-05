import { Movie } from '@app/entities/movie';
import { InMemoryMoviesRepository } from '@app/repositories/in-memory-movies-repository';
import { GetMovies } from './get-movies';

describe('Get all movies', () => {
  it('should be able to get movies', async () => {
    const moviesRepository = new InMemoryMoviesRepository();
    const getMovies = new GetMovies(moviesRepository);

    const exampleMovie = new Movie({
      title: 'example',
      description: 'example',
      coverImage: 'example-image.png',
    });

    await moviesRepository.create(exampleMovie);

    const { movies } = await getMovies.execute();

    expect(movies).toHaveLength(1);
  });
});
