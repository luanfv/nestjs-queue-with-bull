import { Controller, Get } from '@nestjs/common';

import { BasicQueueProducer } from './jobs/basic-queue/basic-queue.producer';

@Controller()
export class AppController {
  constructor(private readonly basicQueueProducer: BasicQueueProducer) {}

  @Get()
  async getHello(): Promise<void> {
    await this.basicQueueProducer.helloBull();
  }
}
