import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category, Type } from "src/enum/product.enum";


export class ProductDTO{
   
   @IsNumber()
   @IsNotEmpty()
   code!:number 

   @IsString()
   @IsNotEmpty()
   name!:string 

   @IsString()
   @IsNotEmpty()
   img!:string
   
   @IsString()
   @IsNotEmpty()
   category!:Category

   @IsString()
   @IsNotEmpty()
   type!:Type

   @IsNumber()
   @IsNotEmpty()
   stock!:number

}