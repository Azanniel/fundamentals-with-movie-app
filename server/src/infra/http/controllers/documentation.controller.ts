import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class DocumentationController {
  @Get('/')
  getInfoServer() {
    return {
      status: 'success',
      message: 'Server is running. This server was built to manager movies',
    };
  }
}
