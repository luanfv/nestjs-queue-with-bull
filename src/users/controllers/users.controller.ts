import { Controller, Post } from '@nestjs/common';
import { BasicQueueProducer } from 'src/queues/jobs/basic-queue/basic-queue.producer';

@Controller('users')
export class UsersController {
  constructor(private readonly basicQueueProducer: BasicQueueProducer) {}

  @Post()
  async createUser() {
    await this.basicQueueProducer.helloBull();

    return 'Usuário criado';
  }
}
