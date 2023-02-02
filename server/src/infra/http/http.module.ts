import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DocumentationController } from './controllers/documentation.controller';
import { GetMovies } from 'src/app/use-cases/get-movies';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentationController],
  providers: [GetMovies],
})
export class HttpModule {}
