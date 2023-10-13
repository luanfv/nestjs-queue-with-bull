import { Body, Controller, Post } from '@nestjs/common';
import { BasicQueueProducer } from 'src/queues/jobs/basic-queue/basic-queue.producer';
import { CreateUserService } from '../services/create-user.service';
import {
  CreateUserInputDto,
  CreateUserOutputDto,
} from '../dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly basicQueueProducer: BasicQueueProducer,
  ) {}

  @Post()
  async createUser(
    @Body() body: CreateUserInputDto,
  ): Promise<CreateUserOutputDto> {
    const user = await this.createUserService.execute(body);
    await this.basicQueueProducer.helloBull();

    return user;
  }
}
