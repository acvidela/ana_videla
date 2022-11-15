import { Controller, Get, Post } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly appService: StudentsService) {}

  @Get()
  getStudent(): string {
    return this.appService.getStudent();
  }
  
  @Post()
  postStudent(): string {
    return this.appService.postStudent();
  }
}