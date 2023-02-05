import { Movie as RawMovie } from '@prisma/client';
import { Movie } from '@app/entities/movie';

export class PrismaMovieMapper {
  static toPrisma(movie: Movie): RawMovie {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      cover: movie.coverImage,
      createdAt: movie.createdAt,
    };
  }

  static toDomain(raw: RawMovie): Movie {
    return new Movie(
      {
        title: raw.title,
        description: raw.description,
        coverImage: raw.cover,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
