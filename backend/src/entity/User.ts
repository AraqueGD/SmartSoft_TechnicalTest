import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {Profile} from "./Profile";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    @OneToOne(() => Profile, {cascade: true, onDelete: "CASCADE"})
    @JoinColumn({name: "idProfile"})
    profile: Profile;

    setPassword = (password: string) => {
        return this.password = bcrypt.hashSync(password, 8);
    };

    isValidPassword = (password: string) => {
        return bcrypt.compareSync(password, this.password);
    }

    generateJWT = () => {
        return jwt.sign(
            {
                id: this.id,
            },
            "SECRET",
            {expiresIn: "1h"}
        );
    }
}
