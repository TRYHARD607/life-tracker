import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
// import bcrypt from 'bcrypt-nodejs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(dto: CreateUserDTO): Promise<User> {
    // dto.password = bcrypt.hashSync(dto.password);
    const user = await this.userModel.create({ ...dto });
    return user;
  }
  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async getOneById(id: ObjectId): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async getOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  // async setParams() {}
}
