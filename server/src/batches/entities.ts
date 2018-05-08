import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm'
import { IsString } from 'class-validator';
import Student from '../students/entities'

@Entity()
export default class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  batchNumber: string

  @IsString()
  @Column('text', { nullable: false })
  startDate: string

  @IsString()
  @Column('text', { nullable: false })
  endDate: string

  @OneToMany(_=> Student, student => student.batch, { eager: true })
  student: Student[]
}