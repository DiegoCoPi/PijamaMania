import { Category, Type } from "src/enum/product.enum";
import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('products')
export class Product{

    @PrimaryColumn({type:"varchar", length:13})
    code!:number

    @Column({type:'varchar', length:25})
    name!:string

    @Column({type:'varchar', length:250})
    img!:string

    @Column({type:'enum', enum: Category})
    category!:Category

    @Column({type:'enum', enum:Type})
    type!:Type

    @Column({type:'varchar', length:2})
    stock!:number

}
