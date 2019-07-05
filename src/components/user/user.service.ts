import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '../../entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>
  ) {
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return await this.repository.create(user)
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.repository.find()
  }

}
