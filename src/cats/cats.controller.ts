import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Cat } from 'src/cats/interfaces/cat.interface'
import { CatsService } from './cats.service'

// type CreateCatDto = {
//   name: string
//   age: number
//   breed: string
// }

// type UpdateCatDto = {
//   id: number
//   name: string
//   age: number
//   breed: string
// }

type CreateCatDto = Cat
type UpdateCatDto = Cat

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`
  }
}
