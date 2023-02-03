import { IsNotEmpty } from 'class-validator';

export class CreateMovieBody {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
