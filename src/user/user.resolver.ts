import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User, UserInput } from './user.gql'
import { Int } from 'type-graphql'

@Resolver(User)
export class UserResolver {
    constructor(private readonly userService: UserService) {
    }

    @Query(returns => [User])
    async users() {
        return await this.userService.findAll()
    }

    @Query(returns => User)
    async userById(@Args({name: 'id', type: () => Int}) id: number) {
        return await this.userService.findById(id)
    }

    @Mutation(returns => User)
    async createUser(@Args({ name: 'user', type: () => UserInput})  user: UserInput) {
        return await this.userService.create(user)
    }

    @Mutation(returns => User)
    async updateById(
      @Args({name: 'id', type: () => Int }) id: number,
      @Args({ name: 'user', type: () => UserInput}) user: UserInput) {
        return await this.userService.update(id, user)
    }

    @Mutation(returns => User)
    async removeById(@Args({name: 'id', type: () => Int}) id: number) {
        return await this.userService.remove(id)
    }
}
