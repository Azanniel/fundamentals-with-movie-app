import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { DocumentationController } from './controllers/documentation.controller';
import { MoviesController } from './controllers/movies.controller';
import { GetMovies } from '@app/use-cases/get-movies';
import { GetUniqueMovie } from '@app/use-cases/get-unique-movie';
import { SaveMovie } from '@app/use-cases/save-movie';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentationController, MoviesController],
  providers: [GetMovies, GetUniqueMovie, SaveMovie],
})
export class HttpModule {}
