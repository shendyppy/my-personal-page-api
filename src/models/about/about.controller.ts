import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
} from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  create(@Body() createAboutDto: CreateAboutDto) {
    return this.aboutService.create(createAboutDto);
  }

  @Get()
  findOne() {
    return this.aboutService.findOne();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutDto: UpdateAboutDto) {
    return this.aboutService.update(id, updateAboutDto);
  }

  @Get('social-links')
  getSocialLinks() {
    return this.aboutService.getSocialLinks();
  }

  @Get('loves')
  getLoves() {
    return this.aboutService.getLoves();
  }
}
