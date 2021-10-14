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
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/exceptions/forbidden.exception';
import { AllExceptionsFilter } from 'src/exceptions/http-exception.filter';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { ParseIntPipe } from 'src/pipes/parse-int.pipe';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { LoggingInterceptor } from 'src/logging.interceptor';

@Controller('cats') // decorator to define a controller, group set of routes
@UseFilters(new AllExceptionsFilter())
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {} // inject to use in this location

  @Post()
  @Roles('admin') // Use custom decorator to check for admin role
  // Validate on request body
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
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
  findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ) {
    return this.catsService.findOne(id);
  }

  @Get('error')
  async throwThis() {
    throw new ForbiddenException();
  }

  @Put(':id')
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  update(@Param('id') id: string, @Body() updateCatDto: any) {
    return `Thisi action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  @Get()
  async findOne(@User('firstName') firstName: string) {
    console.log(`Hello ${firstName}`);
  }
}
