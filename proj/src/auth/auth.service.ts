import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "src/user/entities/user.entity";
import { RoleEntity } from "src/user/entities/role.entity";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";


// @Injectable()
// export class AuthService {
//     constructor(
//         @InjectRepository(UserEntity)
//         private userRepository : Repository<UserEntity>,

//         @InjectRepository(RoleEntity)
//         private roleRepository : Repository<RoleEntity>
//     ){}

//     createU
// }