import { Transform } from 'class-transformer'
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator'
import { CreateRoleDto} from './create-role.dto'
import { ApiProperty } from "@nestjs/swagger"
import { RoleEntity } from '../entities/role.entity';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({example: "test1@email.com"})
    @Transform(({ value }) => value?.toLowerCase().trim())
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsString()
    firstName ?: string

    @ApiProperty()
    @IsString()
    lastName ?: string

    @MinLength(6)
    @IsString()
    password: string

    hash ?: string | null

    @ApiProperty({ type: RoleEntity})
    role ?: RoleEntity | null
}