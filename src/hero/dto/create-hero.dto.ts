import { IsString } from 'class-validator';

export class CreateHeroDto {
  @IsString()
  bio: string;
}
