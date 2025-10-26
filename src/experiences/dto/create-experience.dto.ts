import { IsString, IsBoolean, IsArray, IsOptional } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  experienceId: string;

  @IsString()
  title: string;

  @IsString()
  company: string;

  @IsString()
  logo: string;

  @IsString()
  location: string;

  @IsString()
  period: string;

  @IsOptional()
  @IsBoolean()
  current?: boolean;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  responsibilities: string[];

  @IsArray()
  @IsString({ each: true })
  projects: string[];

  @IsString()
  techStack: string;
}
