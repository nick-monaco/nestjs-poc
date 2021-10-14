import {
  Controller,
  Get,
  HttpCode,
  Post,
  Header,
  Redirect,
  Query,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats') // decorator to define a controller, group set of routes
export class CatsController {
  constructor(private catsService: CatsService) {} // inject to use in this location

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get() // HTTP request method decorator, create handler for endpoint
  // access client request object via express
  async findAll(@Query() query: any): Promise<Cat[]> {
    console.log('limit', query.limit);
    return this.catsService.findAll();
  }

  @Get('ab*cd') // This route has a wildcard
  find(): string {
    return 'This route uses a wildcard';
  }

  // Redirect URL dynamically
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id') // Route paramters
  findOne(@Param('id') id: string): string {
    return `Thisi action finds a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: any) {
    return `Thisi action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
