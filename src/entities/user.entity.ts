import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column('text')
  firstName: string

  @Column('text')
  lastName: string

  @Column('date')
  dateOfBirth: string

  @Column('text')
  email: string

  @Column('text')
  phoneNumber: string

  @Column('text')
  passportId: string

  @Column('text')
  inn: string

  @CreateDateColumn()
  created: string
}
