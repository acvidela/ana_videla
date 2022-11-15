import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Ana Claudia';
  }
  postHello(): string {
    return 'Post Ana Claudia in controller';
  }
}
