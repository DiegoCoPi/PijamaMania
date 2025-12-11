import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ProductInte } from "./products.interface";
import { User } from "../user/user";


@Entity()

export class Products implements ProductInte{

    @PrimaryColumn()
    codebar:number

    @Column()
    name:string
    
    @Column()
    categories: "babies" | "children" | "teenegers-adults";

    @Column()
    type: "pijamas" | "accesories-ladies" | "accesories-babies";

    @Column()
    price: number
    
    @Column()
    stock:number

    @ManyToOne(()=>User,(user)=>user.products)
    user: User;

}