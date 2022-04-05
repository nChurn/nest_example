import { Injectable } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { RoleEntity } from "./entities/role.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateRoleDto } from "./dto/create-role.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EntityCondition } from "src/utils/types/entity-condition";
import { IPaginationOptions } from "src/utils/types/pagination-options";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository : Repository<UserEntity>,
    ){}

    async create(createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return this.userRepository.save(
            this.userRepository.create(createUserDto)
        )
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepository.save(
            this.userRepository.create({
                id,
                ...updateUserDto
            })
        )
    }

    delete(id: number) {
        return this.userRepository.delete(id)
    }

    findOne(fields: EntityCondition<UserEntity>) {
        return this.userRepository.findOne({
            where: fields
        })
    }

    findManyWithPagination(paginationOptions : IPaginationOptions) {
        return this.userRepository.find({
            skip: (paginationOptions.page - 1) * paginationOptions.limit,
            take: paginationOptions.limit,
        });
    }
}