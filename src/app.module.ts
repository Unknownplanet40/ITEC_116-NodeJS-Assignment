import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentsController } from './assignments/assignments.controller';

@Module({
  imports: [],
  controllers: [AppController, AssignmentsController],
  providers: [AppService],
})
export class AppModule {}
