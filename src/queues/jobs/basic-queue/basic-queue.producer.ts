import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

import { BASIC_QUEUE_JOB_FIRST, BASIC_QUEUE_KEY } from './basic-queue.key';
import { BasicQueueDto } from './basic-queue.dto';

@Injectable()
export class BasicQueueProducer {
  constructor(@InjectQueue(BASIC_QUEUE_KEY) private queue: Queue) {}

  async helloBull() {
    const dto: BasicQueueDto = {
      message: `Hello bull with NestJS at ${new Date().toISOString()}`,
    };

    await this.queue.add(BASIC_QUEUE_JOB_FIRST, dto);
  }
}
