import { Injectable } from '@nestjs/common';
import { Movie } from '@app/entities/movie';
import { MoviesRepository } from '@app/repositories/movies-repository';
import { PrismaService } from '../prisma.service';
import { PrismaMovieMapper } from '../mappers/prisma-movie-mapper';

@Injectable()
export class PrismaMoviesRepository implements MoviesRepository {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<Movie[]> {
    const movies = await this.prisma.movie.findMany();

    return movies.map(PrismaMovieMapper.toDomain);
  }

  async create(movie: Movie): Promise<void> {
    const raw = PrismaMovieMapper.toPrisma(movie);

    await this.prisma.movie.create({
      data: raw,
    });
  }
}
