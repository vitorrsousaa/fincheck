import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class BankAccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDTO: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDTO);
  }

  updated(updatedDTO: Prisma.BankAccountUpdateArgs) {
    return this.prismaService.bankAccount.update(updatedDTO);
  }

  findMany(findManyDTO: Prisma.BankAccountFindManyArgs) {
    return this.prismaService.bankAccount.findMany(findManyDTO);
  }

  findFirst(findFirst: Prisma.BankAccountFindFirstArgs) {
    return this.prismaService.bankAccount.findFirst(findFirst);
  }

  delete(deleteDTO: Prisma.BankAccountDeleteArgs) {
    return this.prismaService.bankAccount.delete(deleteDTO);
  }
}
