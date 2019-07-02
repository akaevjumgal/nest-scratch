import { Controller } from '@nestjs/common'

@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}


}
