import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { CreateUserDto } from './user.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
  async createUser(user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async getUserById(userId: string): Promise<User> {
    return this.userModel.findById(userId);
  }

  async getUserByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username });
  }

  async updateUser(userId: string, updates: Partial<User>): Promise<User> {
    return this.userModel.findByIdAndUpdate(userId, updates);
  }

  async deleteUser(userId: string): Promise<void> {
    await this.userModel.findByIdAndDelete(userId);
  }
}
