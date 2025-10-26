import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto) {
    return this.prisma.project.create({
      data: {
        slug: createProjectDto.slug,
        title: createProjectDto.title,
        description: createProjectDto.description,
        image: createProjectDto.image,
        company: createProjectDto.company,
        overview: createProjectDto.overview,
        scope: createProjectDto.scope,
        industry: createProjectDto.industry,
        highlights: {
          create: createProjectDto.highlights.map((highlight) => ({
            highlightId: highlight.highlightId,
            title: highlight.title,
            description: highlight.description,
            impact: highlight.impact,
            link: highlight.link,
            images: {
              create: highlight.images.map((image) => ({
                link: image.link,
                scrollable: image.scrollable || false,
              })),
            },
          })),
        },
      },
      include: {
        highlights: {
          include: {
            images: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.project.findMany({
      include: {
        highlights: {
          include: {
            images: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(slug: string) {
    const project = await this.prisma.project.findUnique({
      where: { slug },
      include: {
        highlights: {
          include: {
            images: true,
          },
        },
      },
    });

    if (!project) {
      throw new NotFoundException(`Project with slug "${slug}" not found`);
    }

    return project;
  }

  async update(slug: string, updateProjectDto: UpdateProjectDto) {
    // First check if project exists
    await this.findOne(slug);

    // Delete existing highlights if new ones are provided
    if (updateProjectDto.highlights) {
      await this.prisma.projectHighlight.deleteMany({
        where: { projectId: (await this.findOne(slug)).id },
      });
    }

    return this.prisma.project.update({
      where: { slug },
      data: {
        ...(updateProjectDto.slug && { slug: updateProjectDto.slug }),
        ...(updateProjectDto.title && { title: updateProjectDto.title }),
        ...(updateProjectDto.description && { description: updateProjectDto.description }),
        ...(updateProjectDto.image && { image: updateProjectDto.image }),
        ...(updateProjectDto.company && { company: updateProjectDto.company }),
        ...(updateProjectDto.overview && { overview: updateProjectDto.overview }),
        ...(updateProjectDto.scope && { scope: updateProjectDto.scope }),
        ...(updateProjectDto.industry && { industry: updateProjectDto.industry }),
        ...(updateProjectDto.highlights && {
          highlights: {
            create: updateProjectDto.highlights.map((highlight) => ({
              highlightId: highlight.highlightId,
              title: highlight.title,
              description: highlight.description,
              impact: highlight.impact,
              link: highlight.link,
              images: {
                create: highlight.images.map((image) => ({
                  link: image.link,
                  scrollable: image.scrollable || false,
                })),
              },
            })),
          },
        }),
      },
      include: {
        highlights: {
          include: {
            images: true,
          },
        },
      },
    });
  }

  async remove(slug: string) {
    await this.findOne(slug);

    return this.prisma.project.delete({
      where: { slug },
    });
  }
}
