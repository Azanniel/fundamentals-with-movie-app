import { Module } from '@nestjs/common';
import { MoviesRepository } from '@app/repositories/movies-repository';
import { PrismaMoviesRepository } from './prisma/repositories/prisma-movies-repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: MoviesRepository,
      useClass: PrismaMoviesRepository,
    },
  ],
  exports: [MoviesRepository],
})
export class DatabaseModule {}
