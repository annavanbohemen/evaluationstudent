import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { IsString } from 'class-validator';
import Student from '../students/entities'

@Entity()
export default class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', { nullable: false })
  color: string

  @Column('text', { default: new Date() })
  date: string

  @Column('text', { nullable: true })
  remark: string

  @ManyToOne(_ => Student, student => student.evaluation, { onDelete: 'CASCADE' })
  student: Student
}