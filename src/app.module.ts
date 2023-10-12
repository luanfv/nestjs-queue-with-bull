import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

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
  ],
  controllers: [AppController],
  providers: [
    BasicQueueFirstConsumer,
    BasicQueueSecondaryConsumer,
    BasicQueueProducer,
  ],
})
export class AppModule {}
