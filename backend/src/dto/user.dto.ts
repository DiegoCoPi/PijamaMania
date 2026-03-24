import { IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, IsString, MinDate, MinLength } from "class-validator";


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
    @IsString()
    address!:string

    @IsNotEmpty()
    @IsNumber()
    phone!:number

    @IsNotEmpty()
    @IsEmail()
    email!:string

    @IsNotEmpty()
    @MinLength(8)
    @IsString()
    password!:string

    @IsNotEmpty()
    @IsString()
    confirmPass!:string
}