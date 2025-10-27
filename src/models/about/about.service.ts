import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';

@Injectable()
export class AboutService {
  constructor(private prisma: PrismaService) {}

  async create(createAboutDto: CreateAboutDto) {
    return this.prisma.about.create({
      data: createAboutDto,
    });
  }

  async findOne() {
    // Return the first (and should be only) about record
    const about = await this.prisma.about.findFirst();

    if (!about) {
      throw new NotFoundException('About information not found');
    }

    return about;
  }

  async update(id: string, updateAboutDto: UpdateAboutDto) {
    return this.prisma.about.update({
      where: { id },
      data: updateAboutDto,
    });
  }

  async getSocialLinks() {
    return this.prisma.socialLink.findMany({
      orderBy: { order: 'asc' },
    });
  }

  async getLoves() {
    return this.prisma.love.findMany({
      include: {
        clubs: true,
      },
      orderBy: { order: 'asc' },
    });
  }
}
