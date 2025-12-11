import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { UserInt } from "./user.interface";
import { Products } from "../products/products";
import { Orders } from "../orders/orders";


@Entity()
export class User implements UserInt{

    @PrimaryColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    lastname: string;

    @Column()
    date: Date;

    @Column()
    address: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    password: string;

    @OneToMany(()=>Products,(product)=>product.user)
    products:Products[];

    @ManyToMany(()=>Orders)
    @JoinTable()
    orders:Orders[]
}