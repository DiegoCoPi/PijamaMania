import { Inject, Injectable } from "@nestjs/common";
import { userDTO } from "src/dto/userDto";
import { User } from "src/entities/user/user";
import { Repository } from "typeorm";

@Injectable()
export class userService{
    constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<User>){}

    async findAll():Promise<User[]>{
        return this.userRepository.find()
    }

    async addUser(data:userDTO):Promise<User[]>{
        
        const userExist = await this.userRepository.findOne({
            where:{idNumber: data.idNumber}
        })

        if(userExist){
            throw new Error('El usuario ya se encuantra registrado')
        }

        const newUser = this.userRepository.create({
            idNumber:data.idNumber,
            name:data.name,
            lastname:data.lastname,
            birthdate:data.birthdate,
            phone:data.phone,
            email:data.email,
            address:data.address,
            password:data.password,
        });

        return this.userRepository.save(newUser)

    }
}