import { Test, TestingModule } from '@nestjs/testing';
import { DocumentationController } from './documentation.controller';

describe('Documentation Controller', () => {
  let controller: DocumentationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentationController],
    }).compile();

    controller = module.get<DocumentationController>(DocumentationController);
  });

  it('should be render a message about server', () => {
    const response = controller.getInfoServer();
    const infoAboutServerExpected = {
      status: 'success',
      message: 'Server is running. This server was built to manager movies',
    };

    expect(response).toStrictEqual(infoAboutServerExpected);
  });
});
