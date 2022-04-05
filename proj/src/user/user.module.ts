import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity';
import { RoleEntity } from './entities/role.entity';
import { UsersController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity])],
    controllers: [UsersController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
