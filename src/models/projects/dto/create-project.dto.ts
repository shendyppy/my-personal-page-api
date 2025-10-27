import { IsString, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CreateProjectImageDto {
  @IsString()
  link: string;

  @IsOptional()
  scrollable?: boolean;
}

class CreateProjectHighlightDto {
  @IsString()
  highlightId: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  impact: string[];

  @IsOptional()
  @IsString()
  link?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProjectImageDto)
  images: CreateProjectImageDto[];
}

export class CreateProjectDto {
  @IsString()
  slug: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  company: string;

  @IsString()
  overview: string;

  @IsOptional()
  @IsString()
  scope?: string;

  @IsOptional()
  @IsString()
  industry?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProjectHighlightDto)
  highlights: CreateProjectHighlightDto[];
}
