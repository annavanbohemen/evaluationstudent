import { JsonController, Body, Post, Authorized, Get, Param} from 'routing-controllers'
import User from './entities'

@JsonController()
export default class UserController {

  @Post('/users')
  async createUser(
    @Body() user: User
  ) {
    const {password, ...rest} = user
    const entity = User.create(rest)
    await entity.setPassword(password)
    
    const createdUser = await entity.save()
    return createdUser
  }

  @Authorized()
  @Get('/users/:id([0-9]+)')
  getUser(
    @Param('id') id: number
  ) {
    return User.findOneById(id)
  }

  @Authorized()
  @Get('/users')
  allUsers() {
    return User.find()
  }
  }