import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

import { BASIC_QUEUE_JOB_SECONDARY, BASIC_QUEUE_KEY } from './basic-queue.key';
import { BasicQueueDto } from './basic-queue.dto';

@Processor(BASIC_QUEUE_KEY)
export class BasicQueueSecondaryConsumer {
  @Process(BASIC_QUEUE_JOB_SECONDARY)
  async secondaryMessage(job: Job<BasicQueueDto>) {
    console.log(job.data.message, new Date().toISOString());
  }
}
