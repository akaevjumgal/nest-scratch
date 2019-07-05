import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  dateOfBirth: number

  @Column()
  email: number

  @Column()
  phoneNumber: string

  @Column()
  passportId: number

  @Column()
  inn: number

}
