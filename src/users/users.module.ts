import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { QueuesModule } from 'src/queues/basic-queue.module';

@Module({
  imports: [QueuesModule],
  controllers: [UsersController],
})
export class UsersModule {}
