import { Inject, Injectable } from '@nestjs/common'
import {Model} from 'mongoose'
import User from '../../models/user.model'

@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User.UserDocument>) {}

  async create(user: User.CreateDto): Promise<User.UserDocument> {
    const result = new this.userModel(user)
    return await result.save()
  }

  async findAll(): Promise<User.UserDocument[]> {
    return await this.userModel.find().exec()
  }

}
