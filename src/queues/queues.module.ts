import { Module } from '@nestjs/common';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullModule } from '@nestjs/bull';

import { BasicQueueFirstConsumer } from './jobs/basic-queue/baisc-queue-first.consumer';
import { BasicQueueProducer } from './jobs/basic-queue/basic-queue.producer';
import { BASIC_QUEUE_KEY } from './jobs/basic-queue/basic-queue.key';

@Module({
  imports: [
    BullModule.registerQueue({
      name: BASIC_QUEUE_KEY,
    }),
    BullBoardModule.forFeature({
      name: BASIC_QUEUE_KEY,
      adapter: BullAdapter,
    }),
  ],
  providers: [BasicQueueFirstConsumer, BasicQueueProducer],
  exports: [BasicQueueFirstConsumer, BasicQueueProducer, BullModule],
})
export class QueuesModule {}
