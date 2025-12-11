import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IntOrders } from "./orders.interface";

@Entity()
export class Orders implements IntOrders{
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    userID:number

    @Column()
    createDate:Date

}