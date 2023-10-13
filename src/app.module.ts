import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';
import { BullAdapter } from '@bull-board/api/bullAdapter';

import { AppController } from './app.controller';
import { BasicQueueFirstConsumer } from './jobs/basic-queue/baisc-queue-first.consumer';
import { BasicQueueProducer } from './jobs/basic-queue/basic-queue.producer';
import { BASIC_QUEUE_KEY } from './jobs/basic-queue/basic-queue.key';
import { BasicQueueSecondaryConsumer } from './jobs/basic-queue/baisc-queue-secondary.consumer';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: BASIC_QUEUE_KEY,
    }),
    BullBoardModule.forFeature({
      name: BASIC_QUEUE_KEY,
      adapter: BullAdapter,
    }),
    BullBoardModule.forRoot({
      route: '/admin/queues',
      adapter: ExpressAdapter,
    }),
  ],
  controllers: [AppController],
  providers: [
    BasicQueueFirstConsumer,
    BasicQueueSecondaryConsumer,
    BasicQueueProducer,
  ],
})
export class AppModule {}
