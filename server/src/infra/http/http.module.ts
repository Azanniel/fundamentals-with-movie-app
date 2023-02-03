import { Module } from '@nestjs/common';
import { GetMovies } from '@app/use-cases/get-movies';
import { DatabaseModule } from '@infra/database/database.module';
import { DocumentationController } from './controllers/documentation.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentationController],
  providers: [GetMovies],
})
export class HttpModule {}
