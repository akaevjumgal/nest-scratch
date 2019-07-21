import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '../entities/user.entity'
import { Repository } from 'typeorm'
import { UserInput } from './user.gql'

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
    const result = await this.repository.findOne(id)
    if (!result) {
      throw new Error('User not found')
    }

    return result;
  }

  async create(entity: UserInput): Promise<UserEntity> {
    return await this.repository.save(entity)
  }

  async update(id: number, user: UserInput): Promise<UserEntity> {
    const answer = await this.repository.update(id, user)
    const result = await answer

    return result.raw;
  }

  async remove(id: number): Promise<number> {
    const answer = await this.repository.delete(id)

    if (!answer.affected) {
      throw new Error(`No such row with id ${id}`)
    }

    return answer.affected;
  }

}
