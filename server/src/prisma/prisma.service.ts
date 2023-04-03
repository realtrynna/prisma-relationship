import { Injectable, OnModuleInit, INestApplication } from "@nestjs/common";
import { PrismaClsient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
  }

  async connect() {
  }
}