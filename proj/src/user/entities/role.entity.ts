import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from "typeorm"


@Entity()
export class RoleEntity {
    @Column()
    role: string;

    @PrimaryGeneratedColumn()
    roleId: number
}