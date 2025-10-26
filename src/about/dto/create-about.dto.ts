import { IsString } from 'class-validator';

export class CreateAboutDto {
  @IsString()
  professionalBioTitle: string;

  @IsString()
  professionalBioContent: string;

  @IsString()
  learningJourneyTitle: string;

  @IsString()
  learningJourneyContent: string;

  @IsString()
  cvTitle: string;

  @IsString()
  cvPreviewImage: string;

  @IsString()
  cvDownloadPath: string;
}
