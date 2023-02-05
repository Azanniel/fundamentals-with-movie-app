import { Movie } from './movie';

describe('Movie', () => {
  it('should be able create a movie', () => {
    const movie = new Movie({
      title: 'One Piece: Z',
      description:
        'Luffy and his friends save a disillusioned Marine admiral who has only one goal: to kill all the pirates in the world, including the Straw Hats.',
      coverImage: 'image-example.png',
    });

    expect(movie).toBeTruthy();
  });

  it('should be able create a movie with a created date included', () => {
    const dateToBeInserted = new Date(2022, 5, 23);
    const movie = new Movie({
      title: 'Everything Everywhere All at Once',
      description:
        'Evelyn Quan is a middle-aged Chinese American immigrant who runs a laundromat with her husband Waymond Wang. Two decades earlier, they eloped to the United States and had a daughter, Joy. The laundromat is being audited by the IRS, Waymond is trying to serve Evelyn divorce papers.',
      coverImage: 'image-example.png',
      createdAt: dateToBeInserted,
    });

    expect(movie).toHaveProperty('createdAt', dateToBeInserted);
  });

  it('should be possible generate automatic uuid', () => {
    const regexValidateUUID =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

    const movie = new Movie({
      title: 'Everything Everywhere All at Once',
      description:
        'Evelyn Quan is a middle-aged Chinese American immigrant who runs a laundromat with her husband Waymond Wang. Two decades earlier, they eloped to the United States and had a daughter, Joy. The laundromat is being audited by the IRS, Waymond is trying to serve Evelyn divorce papers.',
      coverImage: 'image-example.png',
    });

    expect(movie.id).toMatch(regexValidateUUID);
  });
});
