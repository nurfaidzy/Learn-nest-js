import { Module } from '@nestjs/common';
import { AppController } from './Controller/app.controller';
import { userRegister } from './Controller/app.userRegister';
import { AppService } from './app.service';
import { databaseConnect } from './Config/database';
import { UserService } from './Services/user.service';

@Module({
  imports: [...databaseConnect()],
  controllers: [AppController, userRegister],
  providers: [AppService, UserService],
})
export class AppModule {}
