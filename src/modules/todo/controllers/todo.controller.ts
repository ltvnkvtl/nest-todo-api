import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Todo} from "../entities/todo.entity";
import {CreateDto, UpdateDto} from "./dto";

@Controller('api/todo')
export class TodoController {

  @Get()
  getAllAction(): string {
    return 'Todo get all';
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): string {
    return `Todo get one by id=${id}`;
  }

  //Create
  @Post()
  createAction(@Body() todo: CreateDto): CreateDto {
    console.log(todo);
    return todo;
  }

  //Update
  @Put(':id')
  updateAction(
    @Param('id') id: string,
    @Body() todo: UpdateDto
  ): UpdateDto {
    console.log('Update by ID ', id)
    console.log(todo, 'saved');
    return todo;
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string {
    return `Delete by id=${id}`;
  }
}
