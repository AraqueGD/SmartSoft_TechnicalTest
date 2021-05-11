import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./Products";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Products, products => products.category)
    products: Products[];

}