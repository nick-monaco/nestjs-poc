import { Controller, Get } from '@nestjs/common';

// Sub-Domain routing
@Controller({ host: 'admin.example.com' }) // Require that the HTTP host of the incoming requests
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
