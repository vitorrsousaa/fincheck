import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  findAll(userId: string) {
    return this.categoriesRepo.findMany({
      where: {
        userId,
      },
    });
  }
}
