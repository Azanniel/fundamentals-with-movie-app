import * as fileSystem from 'node:fs/promises';
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { MoviesController } from '@infra/http/controllers/movies.controller';
import { GetMovies } from '@app/use-cases/get-movies';
import { SaveMovie } from '@app/use-cases/save-movie';
import { MoviesRepository } from '@app/repositories/movies-repository';
import { InMemoryMoviesRepository } from '@app/repositories/in-memory-movies-repository';
import { GetUniqueMovie } from '@app/use-cases/get-unique-movie';

describe('Movie', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [MoviesController],
      providers: [
        GetMovies,
        GetUniqueMovie,
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

  it('should be able to create a movie', async () => {
    const response = await request(app.getHttpServer())
      .post('/movies')
      .set('Content-Type', 'multipart/form-data')
      .field('title', 'One Piece: Z')
      .field('description', 'lorem ipsum lorem ipsum lorem ipsum ')
      .attach('cover', 'test/images/test-image.jpg');

    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty('movie');
  });

  it('should be not able to create a movie without title', async () => {
    const response = await request(app.getHttpServer())
      .post('/movies')
      .set('Content-Type', 'multipart/form-data')
      .field('description', 'lorem ipsum lorem ipsum lorem ipsum ')
      .attach('cover', 'test/images/test-image.jpg');

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body).toHaveProperty('message');
    expect(response.body.message[0]).toEqual('title should not be empty');
  });

  it('should be return the structure with id, title, description and cover', async () => {
    const { body } = await request(app.getHttpServer())
      .post('/movies')
      .set('Content-Type', 'multipart/form-data')
      .field('title', 'One Piece: Z')
      .field('description', 'lorem ipsum lorem ipsum lorem ipsum ')
      .attach('cover', 'test/images/test-image.jpg');

    expect(body).toEqual(
      expect.objectContaining({
        movie: {
          id: expect.any(String),
          title: expect.any(String),
          description: expect.any(String),
          cover: expect.any(String),
        },
      }),
    );
  });

  it('should be able list movies summary', async () => {
    await request(app.getHttpServer())
      .post('/movies')
      .set('Content-Type', 'multipart/form-data')
      .field('title', 'One Piece: Z')
      .field('description', 'lorem ipsum lorem ipsum lorem ipsum ')
      .attach('cover', 'test/images/test-image.jpg');

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

  it('should be able to show details about movie', async () => {
    const responseCreated = await request(app.getHttpServer())
      .post('/movies')
      .set('Content-Type', 'multipart/form-data')
      .field('title', 'One Piece: Z')
      .field('description', 'lorem ipsum lorem ipsum lorem ipsum ')
      .attach('cover', 'test/images/test-image.jpg');

    const movieCreated = responseCreated.body.movie;

    const responseDetails = await request(app.getHttpServer()).get(
      `/movies/${movieCreated.id}`,
    );

    expect(responseDetails.status).toEqual(200);
    expect(responseDetails.body).toHaveProperty('movie');
    expect(responseDetails.body.movie).toHaveProperty('id', movieCreated.id);
  });

  afterAll(async () => {
    for (const file of await fileSystem.readdir('./static')) {
      await fileSystem.unlink(`./static/${file}`);
    }

    await app.close();
  });
});
