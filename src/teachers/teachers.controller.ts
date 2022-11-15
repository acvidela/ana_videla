import { Controller, Get, Post } from '@nestjs/common';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly appService: TeachersService) {}

  @Get()
  getTeacher(): string {
    return this.appService.getTeacher();
  }
  
  @Post()
  postTeacher(): string {
    return this.appService.postTeacher();
  }
}