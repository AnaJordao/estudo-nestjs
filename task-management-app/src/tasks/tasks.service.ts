import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  // methods in typescript are public by default
  getAllTasks() {
    return this.tasks;
  }
}
