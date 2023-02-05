import { HttpStatus, ParseFilePipe } from '@nestjs/common';
import { FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common/pipes';

export class CreateMovieCoverValidator extends ParseFilePipe {
  constructor() {
    const twoMegaBytesInByte = 1024 * 1024 * 2;

    super({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      validators: [
        new MaxFileSizeValidator({ maxSize: twoMegaBytesInByte }),
        new FileTypeValidator({ fileType: new RegExp(/png|jpg|jpeg/gm) }),
      ],
    });
  }
}
