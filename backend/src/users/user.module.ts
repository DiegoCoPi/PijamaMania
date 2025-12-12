import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.server";
import { DatabaseModule } from "src/database/database.module";
import { userProvider } from "./user.providers";

@Module({
    imports:[DatabaseModule],
    controllers:[UserController],
    providers:[...userProvider,UserService],
    exports:[...userProvider]
})

export class UserModule{}