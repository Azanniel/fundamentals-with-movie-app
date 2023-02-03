import { InMemoryMoviesRepository } from '@app/repositories/in-memory-movies-repository';
import { MoviesRepository } from '@app/repositories/movies-repository';
import { Module } from '@nestjs/common';

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
