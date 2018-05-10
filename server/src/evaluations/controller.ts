import { Authorized, HttpCode, Body, Get, JsonController, BadRequestError, NotFoundError, Param, Patch, Post } from "routing-controllers";
import Student from "../students/entities";
//import Batch from "../batches/entities";
import Evaluation from "./entities"
    
@JsonController()
export default class EvaluationController {
    
    @Authorized()
    @Get('/students/:id([0-9]+)/evaluations')
    @HttpCode(200)
    async getEvaluations(
      @Param('id') studentId: number
    ) {
      const student = await Student.findOneById(studentId)
      if(!student) throw new BadRequestError(`Student not found`)
  
      return student.evaluations
    }


    @Authorized()
    @Post('/students/:id([0-9]+)/evaluations')
    @HttpCode(201)
    async createEvaluation(
      @Body() evaluation: Evaluation,
      @Param('id') studentId: number
    ) {
      const student = await Student.findOneById(studentId)
      if(!student) throw new NotFoundError('Student does not exist')
  
      const createdEvaluation = await Evaluation.create({...evaluation, student}).save()
  
      return createdEvaluation
    }
}