import { IsString, IsInt, IsEnum, Min, Max } from 'class-validator';
import { SkillCategory } from '@prisma/client';

export class CreateSkillDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(100)
  level: number;

  @IsEnum(SkillCategory)
  category: SkillCategory;

  @IsString()
  logo: string;

  @IsString()
  model: string;

  @IsString()
  color: string;
}
