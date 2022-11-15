import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';
import { TeachersService } from './teachers/teachers.service';
import { TeachersController } from './teachers/teachers.controller';

@Module({
  imports: [],
  controllers: [AppController, StudentsController, TeachersController],
  providers: [AppService, StudentsService, TeachersService],
})
export class AppModule {}
