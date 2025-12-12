import { Column, Entity, JoinTable, OneToMany, PrimaryColumn } from "typeorm";
import { UserInt } from "./user.interface";
import { Orders } from "../orders/orders";


@Entity()
export class User implements UserInt{

    @PrimaryColumn()
    idNumber: number;

    @Column()
    name:string;

    @Column()
    lastname: string;

    @Column()
    birthdate: Date;

    @Column()
    address: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @OneToMany(()=>Orders,(order)=>order.user)
    orders:Orders[]
}