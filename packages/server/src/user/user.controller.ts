import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  create(@Body() dto: CreateUserDTO) {
    return this.userService.create(dto);
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  getOneById(@Param('id') id: ObjectId) {
    return this.userService.getOneById(id);
  }

  @Get(':email')
  getOneByEmail(@Param('email') email: string) {
    return this.userService.getOneByEmail(email);
  }

  // setParams() {}
}
