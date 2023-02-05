import * as fileSystem from 'node:fs';
import * as path from 'node:path';
import { randomUUID } from 'node:crypto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetMovies } from '@app/use-cases/get-movies';
import { SaveMovie } from '@app/use-cases/save-movie';
import { CreateMovieBody } from '../dtos/create-movie-body';
import { MovieViewModel } from '../view-models/movie-view-model';
import { GetUniqueMovie } from '@app/use-cases/get-unique-movie';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateMovieCoverValidator } from '../dtos/create-movie-cover-validator';

@Controller('/movies')
export class MoviesController {
  constructor(
    private getMovies: GetMovies,
    private getUniqueMovie: GetUniqueMovie,
    private saveMovie: SaveMovie,
  ) {}

  @Get('/')
  async getAll() {
    const { movies } = await this.getMovies.execute();

    return { movies: movies.map(MovieViewModel.toSummaryHttp) };
  }

  @Get(':movieId')
  async getUnique(@Param('movieId') movieId: string) {
    const { movie } = await this.getUniqueMovie.execute({
      movieId,
    });

    return { movie: MovieViewModel.toHttp(movie) };
  }

  @Post('/')
  @UseInterceptors(FileInterceptor('cover'))
  async store(
    @Body() body: CreateMovieBody,
    @UploadedFile(new CreateMovieCoverValidator())
    coverImage: Express.Multer.File,
  ) {
    const { title, description } = body;

    const storageDirectory = path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'static',
    );

    if (!fileSystem.existsSync(storageDirectory)) {
      fileSystem.mkdirSync(storageDirectory);
    }

    const imageUniqueName = randomUUID();
    const imageExtension = coverImage.mimetype.substring(
      coverImage.mimetype.lastIndexOf('/') + 1,
      coverImage.mimetype.length,
    );
    const imageFullName = `${imageUniqueName}.${imageExtension}`;
    const fullPathToStorageImage = `${storageDirectory}/${imageFullName}`;

    fileSystem.writeFileSync(fullPathToStorageImage, coverImage.buffer);

    const { movie } = await this.saveMovie.execute({
      title,
      description,
      coverImage: imageFullName,
    });

    return { movie: MovieViewModel.toHttp(movie) };
  }
}
