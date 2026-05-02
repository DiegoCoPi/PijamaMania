import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";
import { Product } from "./products.entity";

@Entity('orders')
export class Order{

    @PrimaryGeneratedColumn()
    idOrder!:string


    //Products and Orders relations
    
    @ManyToOne(()=>Product, product=>product.order)
    product!:Product[]


    //User and orders Relations
    @ManyToOne(type=>User, user=>user.id)
    user!:User[]



}
