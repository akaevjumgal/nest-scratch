import { Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { Arg } from 'type-graphql'
import { UserEntity } from '../../entities/user.entity'

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {
    }

    @Query()
    async findAllUsers() {
        return await this.userService.findAll()
    }

    @Query()
    async findById(@Arg('id') id: number) {
        return await this.userService.findById(id)
    }

    @Mutation()
    async createUser(@Arg('user')  user: UserEntity) {
        return await this.userService.create(user)
    }

    @Mutation()
    async updateById(@Arg('id') id: number, @Arg('user') user: UserEntity) {
        return await this.userService.update(id, user)
    }

    @Mutation()
    async removeById(@Arg('id') id: number) {
        return await this.userService.destroy(id)
    }
}
