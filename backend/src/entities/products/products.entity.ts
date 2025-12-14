import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { ProductInte } from "./products.interface";
import { User } from "../user/user.entity";
import { Orders } from "../orders/orders.entity";


@Entity()

export class Products implements ProductInte{

    @PrimaryColumn()
    codebar:number

    @Column()
    name:string
    
    @Column()
    category: "babies" | "children" | "teenegers-adults";

    @Column()
    type: "pijamas" | "accesories-ladies" | "accesories-babies";

    @Column()
    price: number
    
    @Column()
    stock:number

    @ManyToMany(()=>Orders, (order)=>order.products)
    orders:Orders[]

}