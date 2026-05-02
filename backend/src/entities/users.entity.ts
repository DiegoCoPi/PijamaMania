import { IsNumber } from "class-validator";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
export class User{

    @PrimaryColumn()
    id!:number

    @Column()
    name!:string

    @Column()
    lastname!:string

    @Column()
    typeID!:string

    @Column()
    address!:string

    @Column()
    phone!:number
    
    @Column()
    email!:string
    
    @Column({nullable:true})
    password!:string
    
    @Column({nullable:true})
    confirmPass!:string
    

}
