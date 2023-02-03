import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { DocumentationController } from '@infra/http/controllers/documentation.controller';

describe('Documentation', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [DocumentationController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect({
      status: 'success',
      message: 'Server is running. This server was built to manager movies',
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
