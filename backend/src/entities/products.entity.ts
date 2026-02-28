import { Category, Type } from "src/enum/product.enum";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('products')
export class Product{

    @PrimaryGeneratedColumn()
    id!:number

    @Column({type:'varchar', length:25, unique:true})
    code!:number

    @Column({type:'varchar', length:25, unique:true})
    name!:string

    @Column({type:'varchar', length:25, unique:true})
    img!:string

    @Column({type:'enum', enum: Category})
    category!:Category

    @Column({type:'enum', enum:Type})
    type!:Type

    @Column({type:'varchar', length:2})
    stock!:number

}
