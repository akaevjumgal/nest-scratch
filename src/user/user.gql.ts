import { ObjectType, Field, Int, InputType } from 'type-graphql'
import { UserEntity } from '../entities/user.entity'
import { SCHEMA_NAME } from '../common/types'

@ObjectType(SCHEMA_NAME.USER)
export class User implements Partial<UserEntity> {
    @Field(type => Int)
    id: number

    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    dateOfBirth: string

    @Field()
    email: string

    @Field()
    phoneNumber: string

    @Field()
    passportId: string

    @Field()
    inn: string

    @Field()
    created: string
}

@InputType(SCHEMA_NAME.USER_INPUT)
export class UserInput implements Partial<UserEntity> {
    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    dateOfBirth: string

    @Field()
    email: string

    @Field()
    phoneNumber: string

    @Field()
    passportId: string

    @Field()
    inn: string
}
