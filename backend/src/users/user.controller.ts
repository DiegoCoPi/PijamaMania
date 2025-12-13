import { Body, Controller, Delete, Get, NotFoundException, ConflictException, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.server";   // CORREGIDO
import { userDTO } from "src/dto/userDto";
import { User } from "src/entities/user/user";
import type { LoggingDTO } from "src/dto/logging";

@Controller('user')
export class UserController {
    
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':idNumber')
    async findUser(@Param('idNumber') idNumber: number) {
        try {
            return await this.userService.sendUser(idNumber);
        } catch (error) {
            throw new NotFoundException("Usuario no encontrado");
        }
    }

    @Post()
    async userCreate(@Body() createUser: userDTO): Promise<User | null> {
        return await this.userService.addUser(createUser);
    }

    @Put(':idNumber')
    async modifyUser(@Param('idNumber') idNumber: number,@Body() editUser: Partial<userDTO>) {
        return await this.userService.changeUser(idNumber, editUser);
    }


    @Delete(':idNumber')
    async deleteUser(@Param('idNumber') idNumber: number) {
        return await this.userService.deleteUser(idNumber);   // CORREGIDO
    }

    @Post('login')
    async login(@Body() user: LoggingDTO) {
        return await this.userService.loggingUser(user);
    }
}
