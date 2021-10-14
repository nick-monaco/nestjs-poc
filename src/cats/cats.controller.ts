import {
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Header,
  Redirect,
  Query,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats') // decorator to define a controller, group set of routes
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body() createCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }

  @Get() // HTTP request method decorator, create handler for endpoint
  // access client request object via express
  findAll(@Query() query: any): string {
    return `This action returns all cats (limit: ${query.limit} items)`;
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
  async findOne(@Param('id') id: string): Promise<any[]> {
    return [];
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
