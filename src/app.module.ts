import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectsModule } from './models/projects/projects.module';
import { SkillsModule } from './models/skills/skills.module';
import { ExperiencesModule } from './models/experiences/experiences.module';
import { AboutModule } from './models/about/about.module';
import { HeroModule } from './models/hero/hero.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ProjectsModule,
    SkillsModule,
    ExperiencesModule,
    AboutModule,
    HeroModule,
  ],
})
export class AppModule {}
