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

  async findAll(): Promise<UserEntity[]> {
    return await this.repository.find()
  }

  async findById(id: number): Promise<UserEntity> {
    return await this.repository.findOne(id)
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return await this.repository.save(user)
  }

  async update(id: number, user: UserEntity): Promise<UserEntity> {
    const answer = await this.repository.update(id, user)
    const result = await answer

    return result.raw
  }

  async destroy(id: number): Promise<number> {
    const answer = await this.repository.delete(id)

    return answer.affected
  }

}
