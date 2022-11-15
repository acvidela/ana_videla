import { Injectable } from '@nestjs/common';

@Injectable()
export class TeachersService {
    getTeacher(): string {
      return 'teacher Giselle';
    }
    postTeacher(): string {
      return 'Post success - teacher Juan';
    }
}