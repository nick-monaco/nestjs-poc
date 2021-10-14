import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// Creating a "feature module"
@Global() // Make global-scoped module
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // export to share services
})
export class CatsModule {}
