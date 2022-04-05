import { Column,
    Entity,
    ManyToOne,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert,
    BeforeUpdate,
    PrimaryGeneratedColumn,
} from "typeorm"

import { RoleEntity } from "./role.entity";
import * as bcrypt from "bcrypt"

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column({ length: 32, unique: true })
    username: string;

    @Index()
    @Column({ length: 32, unique: true})
    email: string;

    @Column({ nullable: true})
    password: string;

    @Column()
    hashedPassword: string;

    @Column({ nullable: true, length: 32})
    firstName?: string | null;

    @Column({ nullable: true, length: 32})
    lastName?: string | null;

    @ManyToOne(() => RoleEntity, {
        eager: true
    })
    role ?: RoleEntity | null


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        console.log("password")
        console.log(this)
        console.log(this.password)
        this.hashedPassword = await bcrypt.hash(this.password, 8)
        // if (!bcrypt.compareSync(this.password, this.hashPassword) && this.hashedPassword) {
        //     this.hashedPassword = await bcrypt.hash(this.password, 8)
        // }
    }

}