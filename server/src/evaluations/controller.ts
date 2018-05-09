import { Authorized, Body, Get, JsonController, NotFoundError, Param, Patch, Post } from "routing-controllers";
import Student from "./entities";
//import Batch from "../batches/entities";
    
@JsonController()
export default class EvaluationController {



    //@Authorized()
    @Patch('/students/:id([0-9]+)')
    async updateStudent(
        @Body() update: Partial<Student>,
        @Param('id') studentId: number
        ) {
          const student = await Student.findOneById(studentId)
          if(!student) throw new NotFoundError('Student not found.')
      
          return Student.merge(student, update)
        }

    }