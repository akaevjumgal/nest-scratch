import { UserEntity } from '../entities/user.entity'

export class UserDto extends UserEntity {
    id: number
    lastName: string
    dateOfBirth: string
    email: string
    phoneNumber: string
    passportId: string
    inn: string
    created: string
}

export class UserCreateDto extends UserEntity {
    lastName: string
    dateOfBirth: string
    email: string
    phoneNumber: string
    passportId: string
    inn: string
    created: string
}

export class UserUpdateDto extends UserEntity {
    firstName: string
    lastName: string
    dateOfBirth: string
    email: string
    phoneNumber: string
    passportId: string
    inn: string
}
