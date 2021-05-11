import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    gender: string;

    @Column({type: "date", nullable: true})
    birthday: Date;

    @Column({
        nullable: true
    })
    description: string;

    @Column({
        nullable: true
    })
    photo: string;

    @OneToOne(() => User, (user: User) => user.profile, {onDelete: "CASCADE"})
    user: User;
}