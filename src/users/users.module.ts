import { Module } from '@nestjs/common';

import { QueuesModule } from 'src/queues/queues.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersController } from './controllers/users.controller';
import { CreateUserService } from './services/create-user.service';

@Module({
  imports: [QueuesModule, PrismaModule],
  controllers: [UsersController],
  providers: [CreateUserService],
})
export class UsersModule {}
