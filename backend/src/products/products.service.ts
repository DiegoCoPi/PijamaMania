import { BadRequestException, Catch, Injectable } from "@nestjs/common";
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

        try{
            const product = this.productRepository.create(productData)
            return await this.productRepository.save(product)
        }
        catch(error){
            console.error(error)
            throw new BadRequestException("Error al crear el producto")
        }
    }

    //Listado de todos los productos
    async allProduct(){
        try{
            return await this.productRepository.find()
        }
        catch(error){
            console.error(error)
            throw new BadRequestException("Error al encontrar la lista de productos")
        }
        
    }

    //Encontrar un producto
    async oneProduct(code:number):Promise<Product>{
        try{
            const product = await this.productRepository.findOneBy({code})
            
            if(!product){throw new BadRequestException('Producto no existe')}

            return product
        }
        catch(error){
            console.error(error)
            throw new BadRequestException("Error al registrar el producto")
        }
    }

    //Modificar datos de producto
    async modifyProduct(code:number, updateData:Partial<Product>){
        
        try{
            const product = await this.productRepository.findOneBy({code})
    
            if(!product){
                throw new BadRequestException("Producto no disponible")
            }

            Object.assign(product,updateData)

            return this.productRepository.save(product)
        }
        catch(error){
            console.error(error)
            throw new BadRequestException("No s epudo modificar los datos")
        }
    }

    //Eliminar un producto
    async deleteProduct(code:number){

        try{
            const product = await this.productRepository.findOneBy({code})
            
            if(!product){throw new BadRequestException('Producto no se encuentra en el inventario')}
            
            return this.productRepository.delete(product)
        }
        catch(error){
            console.error(error)
            throw new BadRequestException("Error al borrar el producto")
        }
    }

}   

