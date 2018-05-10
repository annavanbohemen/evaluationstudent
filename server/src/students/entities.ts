import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { MinLength, IsString } from 'class-validator';
import Evaluation from '../evaluations/entities';
import Batch from '../batches/entities'

@Entity()
export default class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(2)
  @Column('text', { nullable: false })
  firstName: string

  @IsString()
  @MinLength(2)
  @Column('text', { nullable: false })
  lastName: string

  @IsString()
  @Column('text', { nullable: false })
  picture: string

<<<<<<< HEAD
  @OneToMany(_ => Evaluation, evaluation => evaluation.student, { eager: true })
=======
  @OneToMany(_ => Evaluation, evaluation => evaluation.student, { eager: true, })
>>>>>>> 179f0d0ba456964028ac93cac6fe6e1f5cf50640
  evaluations: Evaluation[]

  @ManyToOne(_=> Batch, batch => batch.students)
  batch: Batch
}