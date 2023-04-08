import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/Services/user.service';

@Controller()
export class userRegister {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  getUsers(): string {
    return this.userService.getUsers();
  }
}
