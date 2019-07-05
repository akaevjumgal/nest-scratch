
namespace User {
  export class CreateDto {
    readonly id: string
    readonly firstName: string
    readonly lastName: string
    readonly dateOfBirth: string
    readonly email: string
    readonly passportId: string
    readonly inn: string
  }

  export interface UserDocument {
    readonly id: string
    readonly firstName: string
    readonly lastName: string
    readonly dateOfBirth: string
    readonly email: string
    readonly passportId: string
    readonly inn: string
  }
}

export default User
