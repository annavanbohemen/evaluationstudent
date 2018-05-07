import { JsonController, Get, Param, Body, Post, NotFoundError } from 'routing-controllers'
import User from './entities'

@JsonController()
export default class UserController {

  // creates a user
  @Post('/users')
  async createUser(
    @Body() user: User
  ) {
    const {password, ...rest} = user
    const entity = User.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }
}