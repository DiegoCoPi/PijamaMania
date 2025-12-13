import { ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { LoggingDTO } from "src/dto/logging";
import { userDTO } from "src/dto/userDto";
import { User } from "src/entities/user/user";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

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
    async addUser(data: userDTO): Promise<User> {
        const userExist = await this.userRepository.findOneBy({ idNumber: data.idNumber });
        if (userExist) {
            throw new ConflictException('El usuario ya se encuentra registrado');
        }

    // Encriptar la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        const newUser = this.userRepository.create({
        ...data,password: hashedPassword,
        });

        return await this.userRepository.save(newUser);
    }
    //Cambio de datos de ususario
    async changeUser(idNumber: number, data: Partial<userDTO>): Promise<User> {

        const user = await this.userRepository.findOneBy({ idNumber });

        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        // Mezcla solo los campos enviados
        this.userRepository.merge(user, data);

        return await this.userRepository.save(user);
    }


    //Borrar o bloquear ussuario
    async deleteUser(idNumber:number):Promise<string>{
        const delUser = await this.userRepository.delete({idNumber})

        if(delUser.affected===0){
            throw new Error("Usuario no encontrado");
        }

        return "Usuario Eliminado correctamente"

    }


    // Servidor para logearse
    async loggingUser(data: LoggingDTO) {
        // Validación inicial
        if (!data || (!data.email && !data.phone) || !data.password?.trim()) {
            throw new UnauthorizedException("Datos de ingreso inválidos");
        }

        let user: User | null = null;

        // Buscar por email o teléfono
        if (data.email?.trim()) {
            user = await this.userRepository.findOneBy({ email: data.email.trim() });
        } 
        if (!user && data.phone?.trim()) {
            user = await this.userRepository.findOneBy({ phone: data.phone.trim() });
        }

        // Validación de existencia y contraseña
        if (!user) {
            throw new UnauthorizedException("Usuario o contraseña no encontrada");
        }

        //Comparación de Contraseña
        const passwordMatch = await bcrypt.compare(
            data.password.trim(),
            user.password,
        );

        if (!passwordMatch) {
            throw new UnauthorizedException("Usuario o contraseña no encontrada");
        }

        // Devuelve usuario seguro
        return {
            message: 'Ingreso Exitoso',
            user: {
                idNumber: user.idNumber,
                name: user.name,
                lastname: user.lastname,
                email: user.email
            }
        };
    }



}