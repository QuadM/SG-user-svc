import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.schema';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-all-users')
  async getAllUsers(): Promise<any> {
    return await this.appService.findAll();
  }

  // @Get(':userId')
  // async getUserByUsername(@Param('username') username: string) {
  //   return this.userService.getUserByUsername(username);
  // }

  @MessagePattern('get-user-by-id')
  async getUserById(@Payload('userId') userId: string) {
    return this.appService.getUserById(userId);
  }

  // @Get(':username')
  // async getUserByUsername(@Param('username') username: string) {
  //   return this.userService.getUserByUsername(username);
  // }

  @MessagePattern('get-user-by-username')
  async getUserByUsername(@Payload('username') username: string) {
    return this.appService.getUserByUsername(username);
  }

  // @EventPattern('create_user')
  // handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
  //   this.appService.createUser(data);
  // }

  @MessagePattern('create-user')
  async createUser(@Payload() user: CreateUserDto) {
    return this.appService.createUser(user);
  }

  // @Put(':userId')
  // async updateUser(
  //   @Param('userId') userId: string,
  //   @Body() updates: Partial<User>,
  // ) {
  //   return this.userService.updateUser(userId, updates);
  // }

  @MessagePattern('update-user')
  async updateUser(
    @Payload('userId') userId: string,
    @Payload('updates') updates: Partial<User>,
  ) {
    return this.appService.updateUser(userId, updates);
  }

  // @Delete(':userId')
  // async deleteUser(@Param('userId') userId: string) {
  //   return this.userService.deleteUser(userId);
  // }
  @MessagePattern('delete-user')
  async deleteUser(@Payload('userId') userId: string) {
    return this.appService.deleteUser(userId);
  }
}
