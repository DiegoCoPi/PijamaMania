import { IsNotEmpty, IsNumber } from "class-validator"


export class Order{
    
    @IsNumber()
    @IsNotEmpty()
    idOrder!:string



}