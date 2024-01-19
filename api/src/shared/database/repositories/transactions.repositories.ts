import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class TransactionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDTO: Prisma.TransactionCreateArgs) {
    return this.prismaService.transaction.create(createDTO);
  }

  updated(updatedDTO: Prisma.TransactionUpdateArgs) {
    return this.prismaService.transaction.update(updatedDTO);
  }

  findMany(findManyDTO: Prisma.TransactionFindManyArgs) {
    return this.prismaService.transaction.findMany(findManyDTO);
  }

  findFirst(findFirst: Prisma.TransactionFindFirstArgs) {
    return this.prismaService.transaction.findFirst(findFirst);
  }

  delete(deleteDTO: Prisma.TransactionDeleteArgs) {
    return this.prismaService.transaction.delete(deleteDTO);
  }
}
