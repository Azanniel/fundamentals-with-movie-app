import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { MoviesController } from '@infra/http/controllers/movies.controller';
import { GetMovies } from '@app/use-cases/get-movies';
import { SaveMovie } from '@app/use-cases/save-movie';
import { MoviesRepository } from '@app/repositories/movies-repository';
import { InMemoryMoviesRepository } from '@app/repositories/in-memory-movies-repository';

describe('Movie', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [MoviesController],
      providers: [
        GetMovies,
        SaveMovie,
        {
          provide: MoviesRepository,
          useClass: InMemoryMoviesRepository,
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  it('(POST) should be able to create a movie', async () => {
    const movieData = {
      title: 'One piece: Z',
      description: 'lorem ipsum lorem ipsum lorem ipsum',
    };

    const response = await request(app.getHttpServer())
      .post('/movies')
      .send(movieData);

    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty('movie');
  });

  it('(POST) should be not able to create a movie without title', async () => {
    const movieData = {
      description: 'lorem ipsum lorem ipsum lorem ipsum',
    };

    const response = await request(app.getHttpServer())
      .post('/movies')
      .send(movieData);

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body).toHaveProperty('message');
    expect(response.body.message[0]).toEqual('title should not be empty');
  });

  it('(POST) should be return the structure with id, title and description', async () => {
    const movieData = {
      title: 'One piece: Z',
      description: 'lorem ipsum lorem ipsum lorem ipsum',
    };

    const { body } = await request(app.getHttpServer())
      .post('/movies')
      .send(movieData);

    expect(body).toEqual(
      expect.objectContaining({
        movie: {
          id: expect.any(String),
          title: expect.any(String),
          description: expect.any(String),
        },
      }),
    );
  });

  it('(GET) should be able list movies summary', async () => {
    const movieData = {
      title: 'One piece: Z',
      description: 'lorem ipsum lorem ipsum lorem ipsum',
    };

    await request(app.getHttpServer()).post('/movies').send(movieData);

    const { body } = await request(app.getHttpServer()).get('/movies');

    expect(body).toHaveProperty('movies');
    expect(body.movies).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          title: expect.any(String),
        }),
      ]),
    );
  });

  afterAll(async () => {
    await app.close();
  });
});
