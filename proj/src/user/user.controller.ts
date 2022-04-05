import { Controller,
    Post,
    Get,
    Body,
    UseGuards,
    HttpCode,
    HttpStatus,
    Param,
    Query,
    DefaultValuePipe,
    ParseIntPipe,
    Patch,
    Delete
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { resolveSoa } from 'dns'
import { infinityPagination } from 'src/utils/infinity-pagination'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserService } from './user.service'

@ApiBearerAuth()
@ApiTags('Users')
@Controller({
    path: 'users',
    version: '1',
})
export class UsersController {
    constructor( private readonly userService: UserService){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: string) {
        return this.userService.findOne({ id: +id})
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe)
        page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
        limit: number,
    ) {
        if ( limit > 50){
            limit = 50
        }

        return infinityPagination(
            await this.userService.findManyWithPagination({
                page, limit
            }),
            { page, limit }
        );
    }
    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id : number, @Body() updateUserDto: UpdateUserDto){
        return this.userService.update(id, updateUserDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.delete(id)
    }
}