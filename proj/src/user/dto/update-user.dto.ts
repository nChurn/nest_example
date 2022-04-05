import { IsString, IsEmail, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { RoleEntity } from '../entities/role.entity'


export class UpdateUserDto {
    @ApiProperty()
    @IsString()
    username?: string

    @ApiProperty()
    @IsString()
    password?: string

    @ApiProperty()
    @IsEmail()
    email?: string

    @ApiProperty()
    @IsString()
    firstName ?: string

    @ApiProperty()
    @IsString()
    lastName ?: string

    @ApiProperty({ type: RoleEntity})
    role ?: RoleEntity | null
}