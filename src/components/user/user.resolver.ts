import { Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { UserCreateDto, UserUpdateDto } from './user.dto'
import { Arg } from 'type-graphql'

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async findAllUsers() {
    try {
      return await this.userService.findAll()
    } catch (e) {
      throw Error(e)
    }
  }

  @Query()
  async findById(@Arg('id') id: number) {
    return await this.userService.findById(id)
  }

  @Mutation()
  async createUser(@Arg('user')  user: UserCreateDto) {
    return await this.userService.create(user)
  }

  @Mutation()
  async updateById(@Arg('id') id: number, @Arg('user') user: UserUpdateDto) {
    return await this.userService.update(id, user)
  }

  @Mutation()
  async removeById(@Arg('id') id: number) {
    return await this.userService.destroy(id)
  }
}
