import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService],
  imports: [DatabaseModule],
})
export class RegisterModule {}
