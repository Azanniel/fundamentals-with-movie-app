import { Module } from '@nestjs/common';
import { DocumentationController } from './controllers/documentation.controller';

@Module({
  imports: [],
  controllers: [DocumentationController],
  providers: [],
})
export class HttpModule {}
