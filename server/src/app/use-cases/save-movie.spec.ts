import { InMemoryMoviesRepository } from '@app/repositories/in-memory-movies-repository';
import { SaveMovie } from './save-movie';

describe('Save movie', () => {
  it('should be able to create a movie', async () => {
    const moviesRepository = new InMemoryMoviesRepository();
    const saveMovie = new SaveMovie(moviesRepository);

    const { movie } = await saveMovie.execute({
      title: 'example-title',
      description: 'example-description',
      coverImage: 'example-image.png',
    });

    expect(moviesRepository.movies).toHaveLength(1);
    expect(moviesRepository.movies[0]).toEqual(movie);
  });
});
