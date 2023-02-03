import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('Movie', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
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

  afterAll(async () => {
    await app.close();
  });
});
