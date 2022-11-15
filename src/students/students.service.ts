import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
    getStudent(): string {
      return 'student 3';
    }
    postStudent(): string {
      return 'Post success - student 4';
    }
}