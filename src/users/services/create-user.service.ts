import { createHmac, randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/services/prisma.service';
import {
  CreateUserInputDto,
  CreateUserOutputDto,
} from '../dtos/create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(user: CreateUserInputDto): Promise<CreateUserOutputDto> {
    const id = randomUUID();
    const password = createHmac('sha256', 'salt')
      .update(user.password)
      .digest('hex');

    const newUser: CreateUserOutputDto =
      await this.prisma.database.users.create({
        data: {
          id,
          name: user.name,
          email: user.email,
          password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        select: {
          id: true,
          name: true,
          email: true,
          password: false,
          createdAt: true,
          updatedAt: true,
        },
      });

    return newUser;
  }
}
