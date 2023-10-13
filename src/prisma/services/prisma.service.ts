import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService {
  public readonly database: PrismaClient;

  constructor() {
    this.database = new PrismaClient();
  }
}
