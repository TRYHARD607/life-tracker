import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(dto: CreateUserDTO): Promise<User> {
    const user = await this.userModel.create({ ...dto });
    return user;
  }
  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getOne(id: ObjectId): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  // async setParams() {}
}
