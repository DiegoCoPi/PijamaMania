import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/users.entity";
import { UserService } from "./users.service";
import { UserController } from "./users.control";

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[UserController],
    providers:[UserService],
    exports:[UserService]
})

export class UserModule{}
