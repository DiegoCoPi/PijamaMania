import { Delete, Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./products.service";
import { Product } from "src/entities/products.entity";

@Controller('products')
export class ProductController{
    constructor(
        private readonly productService:ProductService
    ){}


    //Crear un nuevo producto
    @Post()
    async createProduct(@Body() productData:Partial<Product>){
        const product=await this.productService.newProduct(productData)
        return {
            message:"Producto creado exitosamente",
            product
        }
        
    }

    //Obtener el listado de todos los productos
    @Get()
    async listProducts(){
        return await this.productService.allProduct()
    }

    //Obtener un producto por código de barras
    @Get(':codebar')
    async codebarProduct(@Param('codebar') codebar:number){
        return await this.productService.oneProduct(codebar)
    }

    //Modificar datos de un producto
    @Put(':codebar')
    async changeProduct(@Body() productData:Partial<Product>, @Param('codebar') codebar:number){
        return await this.productService.modifyProduct(codebar,productData)
    }

    //Eliminar el producto e la lista
    @Delete()
    async lessProduct(@Param('codebar') codebar:number){
        return await this.productService.deleteProduct(codebar)
    }

}