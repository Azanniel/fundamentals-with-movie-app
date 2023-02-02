import { Module } from '@nestjs/common';
import { InMemoryMoviesRepository } from '../../app/repositories/in-memory-movies-repository';
import { MoviesRepository } from '../../app/repositories/movies-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: MoviesRepository,
      useClass: InMemoryMoviesRepository,
    },
  ],
  exports: [MoviesRepository],
})
export class DatabaseModule {}
