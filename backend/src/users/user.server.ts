import { ConflictException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { userDTO } from "src/dto/userDto";
import { User } from "src/entities/user/user";
import { Repository } from "typeorm";

@Injectable()
export class UserService{
    constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<User>){}


    //Servidor para ver ussuarios
    async findAll():Promise<User[]>{
        return await this.userRepository.find()
    }

    //Servidor buscar por usuario ID
    async sendUser(idNumber:number){
        const userID = await this.userRepository.findOneBy({idNumber})
        if(!userID){
            throw new NotFoundException("Usuario no encontrado")
        }

        return userID
    }

    //Servidor para crear un usuario
    async addUser(data:userDTO):Promise<User>{
        
        const userExist = await this.userRepository.findOne({
            where:{idNumber: data.idNumber}
        })

        if(userExist){
            throw new ConflictException('El usuario ya se encuantra registrado')
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

        return await this.userRepository.save(newUser)
    }

    //Servidor para modificar algun dato
    async changeUser(data: userDTO): Promise<User> {

   
        const user = await this.userRepository.findOneBy({ idNumber: data.idNumber });

        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        this.userRepository.merge(user, {
            idNumber:data.idNumber,
            name: data.name,
            lastname: data.lastname,
            birthdate: data.birthdate,
            phone: data.phone,
            email: data.email,
            address: data.address,
            password: data.password,
        });

        return await this.userRepository.save(user);
    }

    //Borrar o bloquear ussuario

    async daleteUser(idNumber:number):Promise<string>{
        const delUser = await this.userRepository.delete({idNumber})

        if(delUser.affected===0){
            throw new Error("Usuario no encontrado");
        }

        return "Usuario Eliminado correctamente"

    }
}