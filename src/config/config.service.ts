import * as dotenv from 'dotenv'
import * as fs from 'fs'
import { NotFoundException } from '@nestjs/common'

export class ConfigService {
  private readonly envConfg: { [key: string]: string }

  constructor(filePath: string) {
    this.envConfg = dotenv.parse(fs.readFileSync(filePath))
  }

  get(key: string) {
    return this.envConfg[key] || new NotFoundException('No such variable')
  }
}
