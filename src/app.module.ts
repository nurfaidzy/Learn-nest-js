import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConnect } from './Config/database';

@Module({
  imports: [...databaseConnect()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
