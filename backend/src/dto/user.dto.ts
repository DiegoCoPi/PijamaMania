import { IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class userDTO{

    @IsNotEmpty()
    @IsNumber()
    id!:number

    @IsNotEmpty()
    @IsString()
    name!:string

    @IsNotEmpty()
    @IsString()
    lastname!:string

    @IsNotEmpty()
    @IsString()
    typeID!:string

    @IsNotEmpty()
    @IsAlphanumeric()
    numberID!:String

    @IsNotEmpty()
    @IsString()
    address!:string

    @IsNotEmpty()
    @IsEmail()
    email!:string

    @IsNotEmpty()
    @IsString()
    password!:string

    @IsNotEmpty()
    @IsString()
    confirmPass!:string

}