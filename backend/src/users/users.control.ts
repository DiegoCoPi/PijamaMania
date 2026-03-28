import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "src/products/products.service";
import { UserService } from "./users.service";
import { User } from "src/entities/users.entity";

@Controller('users')
export class UserController{

    constructor(
        private readonly userService:UserService
    ){}

    //Cración de ususario
    @Post()
    async newUser(@Body() userData:Partial<User>){
        const user = await this.userService.addUser(userData)
        return{
            message: "Usuario creado exitosamente",
            user
        }
    }

    //Listado de ususarios
    @Get()
    async listUser(){
        return await this.userService.allUser()
    }

    //Obtener un usuario
    @Get(':id')
    async oneUser(@Param("id") id:number){
        return await this.userService.oneUser(id)
    }

    //Cambio de datos de ususario
    @Put()
    async changeDataUser(@Body("id") id:Partial<User>){
        return await this.userService.changeUser(id)
    }

    //Eliminación de ususarios
    @Delete()
    async lessUser(@Param("id") id:number){
        return await this.userService.deleteUser
    }

}