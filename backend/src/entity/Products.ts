import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import { Category } from "./Category";

@Entity()
export class Products{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "numeric"
    })
    price: number;

    @Column()
    inventory: number;

    @ManyToOne(() => Category, category => category.products)
    category: Category;
}