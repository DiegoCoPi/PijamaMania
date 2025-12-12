import { Body, Controller, Delete, Get, NotFoundException,ConflictException, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.server";
import { userDTO } from "src/dto/userDto";
import { User } from "src/entities/user/user";
import { error } from "console";
import { get } from "http";

@Controller('user')

export class UserController{
    constructor(private readonly userService:UserService){}


    @Get()
    async findAll():Promise<User[]>{
        try{
            return await this.userService.findAll();
        }
        catch(error){
            throw new Error("No se obtuvieron datos del ususario")
        }
    }

    @Get(':idNumber')
    async findUser(@Param('idNumber')idNumber:number){
        try{
            return await this.userService.sendUser(idNumber)
        }
        catch(error){
            throw new NotFoundException("Usuario no encontrado");
        }
    }

    @Post()
    async userCreate(@Body() createUser:userDTO):Promise<User|null>{
        try{
            return await this.userService.addUser(createUser)
        }
        catch(error){
            throw new ConflictException("Usuario no fue creado" + error.message)
        }
    }

    @Put()
    async modifyUser(@Body() editUser:userDTO){
        try{
            return await this.userService.changeUser(editUser)
        }
        catch{
            throw new Error("El dato no ha sido modificado con éxito")
        }
    }

    @Delete()
    async deleteUser(@Body('idNumber') idNunber:number){
        try{
            return await this.userService.daleteUser(idNunber)
        }
        catch{
            throw new Error("El usuario no fue detenido")
        }
    }
    
}