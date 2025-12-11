import { Inject } from "@nestjs/common";
import { User } from "src/entities/user/user";
import { DataSource } from "typeorm";

export const userProvider = [{
    provide:"USER_REPOSITORY",
    useFactory:(dataSource:DataSource)=>dataSource.getRepository(User),
    Inject:['DATA_SOURCE']
}]