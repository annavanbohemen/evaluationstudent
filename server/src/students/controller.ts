import { Authorized, BadRequestError, Body, Delete, Get, Put, HttpCode, JsonController, NotFoundError, Param, Post } from "routing-controllers";
  import Student from "./entities";
  import Batch from "../batches/entities";
  
  @JsonController()
  export default class StudentController {
  
    @Authorized()
    @Get('/students/:id([0-9]+)')
    async getStudent(
      @Param('id') studentId: number
    ) {
      const student = await Student.findOneById(studentId)
      if(!student) throw new NotFoundError('Student not found.')
  
      return student
    }
    
    @Authorized()
    @Post('/batches/:id([0-9]+)/students')
    @HttpCode(201)
    async createStudent(
      @Body() student: Student,
      @Param('id') batchId: number
    ) {
      const batch = await Batch.findOneById(batchId)
      if(!batch) throw new BadRequestError("Batch doesn't exist.")
  
      const createdStudent = await Student.create({...student, batch}).save()
  
      return createdStudent
    }

    @Authorized()
    @Put('/students/:id([0-9]+)')
    @HttpCode(200)
    async updateStudent(
      @Param('id') studentId: number,
      @Body() update: Partial<Student>
    ) {
      const student = await Student.findOneById(studentId)
      if(!student) throw new NotFoundError('Student not found.')
  
      return Student.merge(student, update).save()
    }

    @Authorized()
    @Get('/batches/:id([0-9]+)/students')
    @HttpCode(200)
    async getStudents(
      @Param('id') batchId: number
    ) {
      const batch = await Batch.findOneById(batchId)
      if (!batch) throw new NotFoundError('Batch not found!')
  
      return batch.students

    }

    @Authorized()
    @Delete('/students/:id([0-9]+)')
    async deleteStudent(
      @Param('id') studentId: number
    ) {
      const student = await Student.findOneById(studentId)
      if(!student) throw new NotFoundError('Student not found.')
  
      await student.remove()

      return { id: studentId }
    }
  
  }



