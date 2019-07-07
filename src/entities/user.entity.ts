import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
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
