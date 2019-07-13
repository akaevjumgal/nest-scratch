import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ENTITY_NAME } from '../common/types'

@Entity(ENTITY_NAME.USERS)
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ type: 'date' })
  dateOfBirth: string

  @Column()
  email: string

  @Column()
  phoneNumber: string

  @Column()
  passportId: string

  @Column()
  inn: string

  @CreateDateColumn()
  created: string
}
