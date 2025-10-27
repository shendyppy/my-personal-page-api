import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}

  async create(createHeroDto: CreateHeroDto) {
    return this.prisma.hero.create({
      data: createHeroDto,
    });
  }

  async findOne() {
    // Return the first (and should be only) hero record
    const hero = await this.prisma.hero.findFirst();

    if (!hero) {
      throw new NotFoundException('Hero information not found');
    }

    return hero;
  }

  async update(id: string, updateHeroDto: UpdateHeroDto) {
    return this.prisma.hero.update({
      where: { id },
      data: updateHeroDto,
    });
  }

  async getTraits() {
    return this.prisma.trait.findMany({
      orderBy: { order: 'asc' },
    });
  }
}
