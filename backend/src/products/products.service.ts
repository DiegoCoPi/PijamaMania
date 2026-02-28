import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entities/products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ){}

    //Crear un nuevo producto
    async newProduct(productData:Partial<Product>):Promise<Product>{

        const product = this.productRepository.create(productData)
        return await this.productRepository.save(product)
    }

    //Listado de todos los productos
    async allProduct(){
        return await this.productRepository.find()
    }

    //Encontrar un producto
    async oneProduct(code:number):Promise<Product>{
        const product = await this.productRepository.findOneBy({code})
        
        if(!product){throw new BadRequestException('Producto no existe')}

        return product

    }

    //Modificar datos de producto
    async modifyProduct(code:number, updateData:Partial<Product>){
        
        const product = await this.productRepository.findOneBy({code})

        if(!product){
            throw new BadRequestException("Producto no disponible")
        }

        Object.assign(product,updateData)

        return this.productRepository.save(product)

    }

    //Eliminar un producto
    async deleteProduct(code:number){
        const product = await this.productRepository.findOneBy({code})
        
        if(!product){throw new BadRequestException('Producto no se encuentra en el inventario')}
        
        return this.productRepository.delete(product)
            
    }

}   

