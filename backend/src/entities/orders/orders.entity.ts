import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IntOrders } from "./orders.interface";
import { User } from "../user/user.entity";
import { Products } from "../products/products.entity";

@Entity()
export class Orders implements IntOrders{
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    createDate:Date

    @ManyToOne(()=>User,(user)=>user.orders)
    user:User;

    @ManyToMany(()=>Products)
    @JoinTable()
    products:Products[]

}